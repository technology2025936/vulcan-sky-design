/**
 * Vulcan Aviation — website form entries → Google Sheets.
 *
 * Receives JSON form submissions from the site and appends one row per entry.
 * Columns are created automatically from the payload keys, so every field the
 * site sends (form fields + UTMs + attribution + device/page context) is
 * captured without editing this script.
 *
 * SETUP (one time) — works for a STANDALONE script (made at script.google.com):
 *   1. Open your Google Sheet and copy its ID from the URL:
 *        https://docs.google.com/spreadsheets/d/<THIS_IS_THE_ID>/edit
 *   2. Paste that ID into SPREADSHEET_ID below.
 *   3. In the script editor, paste this whole file, then Save.
 *   4. Deploy ▸ New deployment ▸ type "Web app".
 *        - Description: Vulcan form intake
 *        - Execute as:  Me
 *        - Who has access: Anyone
 *   5. Authorize when prompted. Copy the Web app URL (ends in /exec).
 *   6. Put that URL in the site's VITE_SHEETS_WEBHOOK_URL env var and rebuild.
 *
 * (If instead you opened the script from inside the Sheet via
 *  Extensions ▸ Apps Script, you can leave SPREADSHEET_ID blank — it falls
 *  back to the active spreadsheet.)
 *
 * Every submission is also emailed to NOTIFY_EMAIL below.
 *
 * After changing this script, redeploy with: Deploy ▸ Manage deployments ▸
 * (edit) ▸ Version: New version ▸ Deploy. The /exec URL stays the same.
 * NOTE: adding email sending introduces a new permission — the first deploy/run
 * after this change will ask you to re-authorize. Approve it (Advanced ▸ Go to
 * project ▸ Allow) or emails won't send.
 */

// Paste your spreadsheet ID here (from the Sheet URL). Required for a
// standalone script; optional for a Sheet-bound script.
var SPREADSHEET_ID = "1i022gt5s-VRKkGZmdcvvSy9qU3G3CsXWrT0M9pJ0gIs";

// The tab (worksheet) entries are written to. Auto-created if it doesn't exist.
var SHEET_NAME = "Leads";

// Every submission is emailed here. Use a comma-separated list for multiple
// recipients (e.g. "a@x.com,b@x.com"). Leave blank to disable email.
var NOTIFY_EMAIL = "pilot360@flyvulcan.co.za";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    appendRow_(data);
    // Email is secondary — never let a mail failure fail the submission.
    try {
      sendNotification_(data);
    } catch (mailErr) {
      // swallow; the row is already saved to the sheet
    }
    return jsonOutput_({ result: "success" });
  } catch (err) {
    return jsonOutput_({ result: "error", message: String(err) });
  }
}

// Health check + diagnostics. Open the /exec URL in a browser to see whether
// the script can reach your sheet and how many rows it has.
function doGet() {
  try {
    var ss = SPREADSHEET_ID
      ? SpreadsheetApp.openById(SPREADSHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      return jsonOutput_({
        result: "error",
        message:
          "Cannot find spreadsheet. SPREADSHEET_ID is empty and there is no " +
          "active spreadsheet (this is a standalone script).",
        spreadsheet_id_set: false,
      });
    }
    var sheet = ss.getSheetByName(SHEET_NAME);
    return jsonOutput_({
      result: "ok",
      message: "Vulcan form intake is live",
      spreadsheet_id_set: !!SPREADSHEET_ID,
      spreadsheet_name: ss.getName(),
      leads_tab: SHEET_NAME,
      leads_tab_exists: !!sheet,
      rows_including_header: sheet ? sheet.getLastRow() : 0,
    });
  } catch (err) {
    return jsonOutput_({
      result: "error",
      message: String(err),
      spreadsheet_id_set: !!SPREADSHEET_ID,
    });
  }
}

function appendRow_(data) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // avoid races when two entries arrive at once
  try {
    var sheet = getSheet_();
    var headers =
      sheet.getLastRow() > 0
        ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
        : [];

    // Server receive time is always the first column.
    if (headers.indexOf("received_at") === -1) {
      headers.unshift("received_at");
    }

    // Add any new payload keys as new columns (order preserved across rows).
    Object.keys(data).forEach(function (key) {
      if (headers.indexOf(key) === -1) headers.push(key);
    });

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    var row = headers.map(function (header) {
      if (header === "received_at") return new Date();
      var value = data[header];
      if (value === undefined || value === null) return "";
      return typeof value === "object" ? JSON.stringify(value) : value;
    });

    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error(
      "No spreadsheet. Set SPREADSHEET_ID (standalone script) or open the " +
        "script from inside the Sheet (Extensions > Apps Script)."
    );
  }
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

// Emails a readable summary of the submission to NOTIFY_EMAIL.
function sendNotification_(data) {
  if (!NOTIFY_EMAIL) return;

  var formName = data.form_name || "Website Form";
  var who = data.fullName || data.name || data.email || "New lead";
  var subject = "New " + formName + " — " + who;

  // Show the human-facing contact fields first, then everything else.
  var priority = [
    "form_name",
    "fullName",
    "name",
    "email",
    "phone",
    "requested_label",
    "requested_file",
  ];

  var lines = [];
  priority.forEach(function (key) {
    if (data[key] !== undefined && data[key] !== null && data[key] !== "") {
      lines.push(labelize_(key) + ": " + data[key]);
    }
  });
  Object.keys(data).forEach(function (key) {
    if (
      priority.indexOf(key) === -1 &&
      data[key] !== undefined &&
      data[key] !== null &&
      data[key] !== ""
    ) {
      lines.push(labelize_(key) + ": " + data[key]);
    }
  });

  var body =
    "A new submission came in from the Vulcan Aviation website.\n\n" +
    lines.join("\n") +
    "\n\n— Saved to the Leads sheet automatically.";

  var options = { name: "Vulcan Aviation Website" };
  // Let the recipient reply straight to the lead.
  if (data.email && /^\S+@\S+\.\S+$/.test(String(data.email))) {
    options.replyTo = String(data.email);
  }

  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);
}

// "first_utm_source" -> "First Utm Source"
function labelize_(key) {
  return key.replace(/_/g, " ").replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  });
}

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

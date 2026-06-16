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
 * After changing this script, redeploy with: Deploy ▸ Manage deployments ▸
 * (edit) ▸ Version: New version ▸ Deploy. The /exec URL stays the same.
 */

// Paste your spreadsheet ID here (from the Sheet URL). Required for a
// standalone script; optional for a Sheet-bound script.
var SPREADSHEET_ID = "1i022gt5s-VRKkGZmdcvvSy9qU3G3CsXWrT0M9pJ0gIs";

// The tab (worksheet) entries are written to. Auto-created if it doesn't exist.
var SHEET_NAME = "Leads";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    appendRow_(data);
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

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

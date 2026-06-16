/**
 * Vulcan Aviation — website form entries → Google Sheets.
 *
 * Receives JSON form submissions from the site and appends one row per entry.
 * Columns are created automatically from the payload keys, so every field the
 * site sends (form fields + UTMs + attribution + device/page context) is
 * captured without editing this script.
 *
 * SETUP (one time):
 *   1. Create / open a Google Sheet.
 *   2. Extensions ▸ Apps Script. Delete any boilerplate, paste this file.
 *   3. Deploy ▸ New deployment ▸ type "Web app".
 *        - Description: Vulcan form intake
 *        - Execute as:  Me
 *        - Who has access: Anyone
 *   4. Authorize when prompted. Copy the Web app URL (ends in /exec).
 *   5. Put that URL in the site's VITE_SHEETS_WEBHOOK_URL env var and rebuild.
 *
 * After changing this script, redeploy with: Deploy ▸ Manage deployments ▸
 * (edit) ▸ Version: New version ▸ Deploy. The /exec URL stays the same.
 */

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

// Simple health check so you can open the /exec URL in a browser.
function doGet() {
  return jsonOutput_({ result: "ok", message: "Vulcan form intake is live" });
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
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

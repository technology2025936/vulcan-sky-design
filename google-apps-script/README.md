# Google Sheets form intake

All website forms (the two Aviation Enquiry questionnaires and the document
download lead popups) post a copy of every submission to a Google Sheet, along
with marketing attribution and page/device context.

## One-time setup

You can use **either** path below. The standalone path is easiest if
"Extensions → Apps Script" isn't available to you.

### Path A — Standalone script (script.google.com)

1. Open your Google Sheet. Copy its **ID** from the URL:
   `https://docs.google.com/spreadsheets/d/`**`<THIS_IS_THE_ID>`**`/edit`
2. Go to **script.google.com → New project**. Delete the stub, paste
   [`Code.gs`](./Code.gs).
3. At the top of the script, set `var SPREADSHEET_ID = "<paste the ID>";`
4. **Deploy → New deployment → Web app** — Execute as: **Me**, Who has access:
   **Anyone**. Authorize when prompted.
5. Copy the **Web app URL** (ends in `/exec`).

### Path B — Bound script (from inside the Sheet)

1. In the Sheet: **Extensions → Apps Script**. Paste [`Code.gs`](./Code.gs).
   Leave `SPREADSHEET_ID = ""` (it uses the active sheet).
2. **Deploy → New deployment → Web app** (same settings as above), authorize,
   copy the `/exec` URL.

> Don't see **Extensions → Apps Script**? The file is probably an uploaded
> `.xlsx`, not a native Google Sheet. Do **File → Save as Google Sheets** first,
> or just use Path A.

### Then, for either path

6. In the site repo, set the URL in `.env`:
   ```
   VITE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```
7. Rebuild and deploy the site (`npm run build`). Done.

Open the `/exec` URL in a browser — it should return
`{"result":"ok"...}`. That confirms the endpoint is live.

### About the sheet name

- `SPREADSHEET_ID` points to your spreadsheet **file** — its name (e.g.
  "Vulcan Lead Sheet") doesn't matter.
- Entries are written to a **tab** named `Leads`, created automatically. If you
  want them in a tab you already renamed, set `var SHEET_NAME = "Your Tab Name";`
  to match.

## What gets captured (per row)

A `Leads` tab is created automatically. Columns are generated from whatever the
site sends, so nothing here needs editing when fields change. Current columns:

| Group | Fields |
|-------|--------|
| Meta | `received_at` (server), `submitted_at` (client), `form_name` |
| Enquiry form | `fullName, email, phone, dob, height, education, licence, medical, english, careerGoal, citizenship` |
| Download popup | `name, email, phone, requested_label, requested_file` |
| Last-touch campaign | `utm_source, utm_medium, utm_campaign, utm_term, utm_content`, `gclid, fbclid, msclkid` |
| First-touch campaign | `first_utm_source … first_utm_content, first_referrer, landing_page, first_visit_at` |
| Page / device | `page_url, page_path, page_referrer, user_agent, device_type, screen_resolution, viewport, language, timezone` |

> Each form only sends its own fields, so unrelated columns stay blank for that
> row — expected.

## Notes

- Entries are sent **best-effort and non-blocking**. Strapi remains the primary
  store for the enquiry forms; if Sheets logging ever fails it never blocks the
  user or the existing Strapi submission.
- The browser sends a CORS-simple `text/plain` request, so no extra CORS config
  is needed on the Apps Script side.
- To add fields later, just include them in the payload (see
  `src/lib/leads.ts`) — new columns appear automatically.

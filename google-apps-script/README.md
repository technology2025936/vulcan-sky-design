# Google Sheets form intake

All website forms (the two Aviation Enquiry questionnaires and the document
download lead popups) post a copy of every submission to a Google Sheet, along
with marketing attribution and page/device context.

## One-time setup

1. Create a new Google Sheet (or open an existing one). This is where entries land.
2. **Extensions → Apps Script**. Delete the default `myFunction` stub and paste
   the contents of [`Code.gs`](./Code.gs). Save.
3. **Deploy → New deployment → Web app**:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Authorize the script when prompted (it only touches this spreadsheet).
5. Copy the **Web app URL** (it ends in `/exec`).
6. In the site repo, set it in `.env`:
   ```
   VITE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```
7. Rebuild and deploy the site (`npm run build`). Done.

Open the `/exec` URL in a browser — it should return
`{"result":"ok"...}`. That confirms the endpoint is live.

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

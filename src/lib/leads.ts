// Sends every form entry to a Google Sheet via a Google Apps Script Web App.
// Bundles the form fields with marketing attribution (UTMs, click IDs,
// first/last touch) and runtime context (page, referrer, device, locale).
//
// Best-effort + non-blocking: the site's primary submission (Strapi) is never
// affected if Sheets logging fails. Configure the endpoint with
// VITE_SHEETS_WEBHOOK_URL (the deployed Apps Script Web App URL).

import { getAttribution } from "./attribution";

const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL as
  | string
  | undefined;

function runtimeMeta(): Record<string, string> {
  const nav = navigator;
  return {
    page_url: window.location.href,
    page_path: window.location.pathname,
    page_referrer: document.referrer || "",
    user_agent: nav.userAgent,
    device_type: /Mobi|Android|iPhone|iPad|iPod/i.test(nav.userAgent)
      ? "mobile"
      : "desktop",
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    language: nav.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
  };
}

/** Build the full payload (fields + attribution + runtime context). */
export function buildLeadPayload(
  formName: string,
  fields: Record<string, any>
): Record<string, any> {
  return {
    form_name: formName,
    submitted_at: new Date().toISOString(),
    ...fields,
    ...getAttribution(),
    ...runtimeMeta(),
  };
}

/**
 * Fire-and-forget the entry to Google Sheets. Uses a CORS-simple request
 * (text/plain, no preflight) so the Apps Script Web App accepts it directly.
 * Never throws — failures are logged and swallowed.
 */
export async function sendToSheets(
  formName: string,
  fields: Record<string, any>
): Promise<void> {
  if (!SHEETS_WEBHOOK_URL) {
    if (import.meta.env.DEV) {
      console.warn("VITE_SHEETS_WEBHOOK_URL not set — skipping Sheets logging.");
    }
    return;
  }

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(buildLeadPayload(formName, fields)),
      keepalive: true,
    });
  } catch (err) {
    console.error("📄 Google Sheets logging failed:", err);
  }
}

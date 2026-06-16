// Marketing attribution capture.
// Captures UTM params + ad click IDs from the URL, persists first-touch
// (the campaign that first brought the visitor) and last-touch (the most
// recent campaign) in localStorage, so the data survives SPA navigation and
// is available whenever a form is submitted.

const FIRST_TOUCH_KEY = "vulcan_first_touch";
const LAST_TOUCH_KEY = "vulcan_last_touch";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

// Ad-platform click identifiers (Google, Meta/Facebook, Microsoft/Bing).
const CLICK_KEYS = ["gclid", "fbclid", "msclkid"] as const;

type Attr = Record<string, string>;

const isBrowser = () => typeof window !== "undefined";

function readParams(): Attr {
  const params = new URLSearchParams(window.location.search);
  const out: Attr = {};
  [...UTM_KEYS, ...CLICK_KEYS].forEach((key) => {
    const value = params.get(key);
    if (value) out[key] = value;
  });
  return out;
}

function snapshot(params: Attr): Attr {
  return {
    ...params,
    landing_page: window.location.pathname + window.location.search,
    referrer: document.referrer || "",
    timestamp: new Date().toISOString(),
  };
}

function safeParse(raw: string | null): Attr {
  try {
    return raw ? (JSON.parse(raw) as Attr) : {};
  } catch {
    return {};
  }
}

/**
 * Call once on app load. Records first-touch attribution (only the first time)
 * and refreshes last-touch whenever the URL carries campaign params.
 */
export function captureAttribution(): void {
  if (!isBrowser()) return;
  try {
    const params = readParams();
    const hasCampaignParams = Object.keys(params).length > 0;

    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(snapshot(params)));
    }

    if (hasCampaignParams) {
      localStorage.setItem(LAST_TOUCH_KEY, JSON.stringify(snapshot(params)));
    }
  } catch {
    // localStorage may be unavailable (private mode); attribution is best-effort.
  }
}

/**
 * Flat attribution object ready to merge into a form submission.
 * Last-touch fields take the current URL first, then stored last-touch.
 */
export function getAttribution(): Attr {
  if (!isBrowser()) return {};

  const first = safeParse(localStorage.getItem(FIRST_TOUCH_KEY));
  const storedLast = safeParse(localStorage.getItem(LAST_TOUCH_KEY));
  const current = readParams();
  const lastTouch = Object.keys(current).length > 0 ? current : storedLast;

  const out: Attr = {};

  // Last-touch campaign (the session that converted)
  [...UTM_KEYS, ...CLICK_KEYS].forEach((key) => {
    out[key] = lastTouch[key] || "";
  });

  // First-touch campaign (original source)
  UTM_KEYS.forEach((key) => {
    out[`first_${key}`] = first[key] || "";
  });

  out.first_referrer = first.referrer || "";
  out.landing_page = first.landing_page || "";
  out.first_visit_at = first.timestamp || "";

  return out;
}

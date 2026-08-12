// Locale setup.
//
// The site is a single page at "/" that swaps language in place via React
// state (see SiteShell). There are no per-locale URLs, so there is no routing
// config here — only what the UI needs to render each language.

export const LOCALES = ["en", "ar"];
export const DEFAULT_LOCALE = "en";

export const SITE_URL = "https://mohamedcoding.com";

// Text direction per locale. Applied to <html dir> so the whole layout mirrors.
export const LOCALE_DIR = {
  en: "ltr",
  ar: "rtl",
};

export function isRtl(locale) {
  return LOCALE_DIR[locale] === "rtl";
}

// Framer Motion x-offsets are written for LTR. Multiply by this so a slide-in
// "from the start edge" comes from the right in Arabic instead of the left.
export function dirMultiplier(locale) {
  return isRtl(locale) ? -1 : 1;
}

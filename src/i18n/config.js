export const LOCALES = ["en", "ar"];
export const DEFAULT_LOCALE = "en";

export const SITE_URL = "https://mohamedcoding.com";

export const LOCALE_DIR = {
  en: "ltr",
  ar: "rtl",
};

export function isRtl(locale) {
  return LOCALE_DIR[locale] === "rtl";
}

export function dirMultiplier(locale) {
  return isRtl(locale) ? -1 : 1;
}

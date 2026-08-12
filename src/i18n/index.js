import en from "./en";
import ar from "./ar";

export const dictionaries = { en, ar };

// Falls back to English if an unknown locale is ever passed in, so a typo in a
// route never renders a blank page.
export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.en;
}

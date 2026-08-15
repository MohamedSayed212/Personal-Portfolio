import en from "./en";
import ar from "./ar";

export const dictionaries = { en, ar };

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.en;
}

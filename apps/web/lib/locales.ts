// Locale constants with no runtime imports, so client components can use them
// without bundling the message dictionaries that "@/lib/i18n" loads.
export const DEFAULT_LOCALE = "id";
export const LOCALES = ["id", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

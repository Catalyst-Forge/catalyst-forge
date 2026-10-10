import enMessages from "../messages/en.json";
import idMessages from "../messages/id.json";
import type { Locale } from "@/lib/locales";

export { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "@/lib/locales";

export type Messages = typeof idMessages;

const dictionaries: Record<Locale, Messages> = {
  id: idMessages,
  en: enMessages,
};

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

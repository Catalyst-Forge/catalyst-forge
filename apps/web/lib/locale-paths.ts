import type { Locale } from "@/lib/i18n";

// Kept free of runtime imports from "@/lib/i18n" so client components can use
// it without bundling every message dictionary.
const DEFAULT_LOCALE: Locale = "id";

/** Path of the portfolio list, or of one project when a slug is given. */
export function getPortfolioPath(locale: Locale, slug?: string) {
  const base =
    locale === DEFAULT_LOCALE ? "/portfolio" : `/${locale}/portfolio`;
  return slug ? `${base}/${slug}` : base;
}

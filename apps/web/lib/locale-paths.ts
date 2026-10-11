import { DEFAULT_LOCALE, type Locale } from "@/lib/locales";

/** Path of the portfolio list, or of one project when a slug is given. */
export function getPortfolioPath(locale: Locale, slug?: string) {
  const base =
    locale === DEFAULT_LOCALE ? "/portfolio" : `/${locale}/portfolio`;
  return slug ? `${base}/${slug}` : base;
}

/** Path of a service landing page, e.g. "/custom-crm" or "/en/custom-crm". */
export function getServicePath(locale: Locale, slug: string) {
  return locale === DEFAULT_LOCALE ? `/${slug}` : `/${locale}/${slug}`;
}

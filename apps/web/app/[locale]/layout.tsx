import type { ReactNode } from "react";
import { HtmlLang } from "@/components/html-lang";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "@/lib/i18n";

// Prerender every route under /[locale] for the non-default locales and treat
// any other first path segment as a 404 instead of rendering this route.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map(
    (locale) => ({ locale }),
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HtmlLang lang={isLocale(locale) ? locale : DEFAULT_LOCALE} />
      {children}
    </>
  );
}

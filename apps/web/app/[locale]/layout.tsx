import type { ReactNode } from "react";
import { HtmlLang } from "@/components/html-lang";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

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

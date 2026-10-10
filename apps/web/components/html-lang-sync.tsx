"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE } from "@/lib/i18n";

/** Keeps <html lang> right during client-side navigation in and out of a locale. */
export function HtmlLangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = DEFAULT_LOCALE;
    };
  }, [lang]);

  return null;
}

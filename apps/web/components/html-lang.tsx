import { HtmlLangSync } from "@/components/html-lang-sync";

/**
 * The root layout renders <html lang="id"> for every route. Locale layouts
 * mount this to correct it: the inline script fixes the attribute on a full
 * page load before hydration, and HtmlLangSync covers client-side navigation.
 */
export function HtmlLang({ lang }: { lang: string }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)};`,
        }}
      />
      <HtmlLangSync lang={lang} />
    </>
  );
}

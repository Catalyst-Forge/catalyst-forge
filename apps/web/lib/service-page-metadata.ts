import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getServicePath } from "@/lib/locale-paths";
import { createPageMetadata } from "@/lib/page-metadata";
import { getServicePage, type ServiceSlug } from "@/lib/service-pages";

const siteUrl = "https://catalystforge.web.id";

/** Path of every language version of one service page. */
export function getServiceLanguagePaths(
  slug: ServiceSlug,
): Record<Locale, string> {
  return {
    id: getServicePath("id", slug),
    en: getServicePath("en", slug),
  };
}

export function createServicePageMetadata(
  locale: Locale,
  slug: ServiceSlug,
): Metadata {
  const page = getServicePage(locale, slug);

  // The social card comes from the opengraph-image / twitter-image files that
  // sit next to each service route.
  return {
    ...createPageMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      locale,
      path: getServicePath(locale, slug),
      languages: getServiceLanguagePaths(slug),
    }),
    keywords: page.keywords,
  };
}

const jsonLdLanguages: Record<Locale, string> = {
  id: "id-ID",
  en: "en",
};

/** Service and FAQ structured data for one service page. */
export function createServiceJsonLd(locale: Locale, slug: ServiceSlug) {
  const page = getServicePage(locale, slug);
  const url = `${siteUrl}${getServicePath(locale, slug)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      areaServed: { "@type": "Country", name: "Indonesia" },
      description: page.metaDescription,
      inLanguage: jsonLdLanguages[locale],
      name: page.metaTitle,
      provider: {
        "@type": "Organization",
        name: "CatalystForge",
        url: siteUrl,
      },
      serviceType: page.shortName,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: jsonLdLanguages[locale],
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        acceptedAnswer: { "@type": "Answer", text: item.answer },
        name: item.question,
      })),
      url,
    },
  ];
}

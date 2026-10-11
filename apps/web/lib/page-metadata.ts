import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

const siteUrl = "https://catalystforge.web.id";

const ogLocales: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
};

type PageMetadataInput = {
  title: string;
  description: string;
  locale: Locale;
  /** Path of this page, e.g. "/about" or "/en/about". */
  path: string;
  /** Paths of every language version of this page, including this one. */
  languages?: Partial<Record<Locale, string>>;
  robots?: Metadata["robots"];
  /**
   * Use the site-wide card. Needed for pages whose segment has no
   * opengraph-image file: defining openGraph here replaces the parent's,
   * so the root image is not inherited.
   */
  defaultImage?: boolean;
};

export function createPageMetadata({
  title,
  description,
  locale,
  path,
  languages,
  robots,
  defaultImage = false,
}: PageMetadataInput): Metadata {
  // Bypass the layout's "%s | CatalystForge" template so the brand never
  // appears twice, and reuse the same full title for social cards.
  const fullTitle = title.includes("CatalystForge")
    ? title
    : `${title} | CatalystForge`;

  // Images come from the nearest opengraph-image / twitter-image file, so
  // pages with their own card (team, portfolio, projects) get it automatically.
  return {
    title: { absolute: fullTitle },
    description,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: path,
      ...(languages
        ? {
            languages: {
              ...languages,
              ...(languages.id ? { "x-default": languages.id } : {}),
            },
          }
        : {}),
    },
    openGraph: {
      title: fullTitle,
      description,
      ...(defaultImage
        ? {
            images: [
              {
                alt: "CatalystForge digital solution services",
                height: 630,
                url: "/opengraph-image",
                width: 1200,
              },
            ],
          }
        : {}),
      locale: ogLocales[locale],
      siteName: "CatalystForge",
      type: "website",
      url: `${siteUrl}${path === "/" ? "" : path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(defaultImage ? { images: ["/twitter-image"] } : {}),
    },
  };
}

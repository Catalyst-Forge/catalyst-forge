import { getMessages, LOCALES, type Locale } from "@/lib/i18n";
import { getPortfolioPath } from "@/lib/locale-paths";

/**
 * Paths of every language version of a portfolio project. Projects are paired
 * by their position in each locale's list because slugs are translated
 * (e.g. "sistem-pakar-udang" / "expert-system-vannamei").
 */
export function getPortfolioProjectPaths(
  locale: Locale,
  slug: string,
): Partial<Record<Locale, string>> | undefined {
  const index = getMessages(locale).portfolioPage.projects.findIndex(
    (project) => project.slug === slug,
  );

  if (index === -1) return undefined;

  const paths: Partial<Record<Locale, string>> = {};

  for (const candidate of LOCALES) {
    const counterpart = getMessages(candidate).portfolioPage.projects[index];
    if (counterpart) {
      paths[candidate] = getPortfolioPath(candidate, counterpart.slug);
    }
  }

  return paths;
}

/** Every portfolio project path in every locale, for the sitemap. */
export function getAllPortfolioProjectPaths(): string[] {
  return LOCALES.flatMap((locale) =>
    getMessages(locale).portfolioPage.projects.map((project) =>
      getPortfolioPath(locale, project.slug),
    ),
  );
}

import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getMessages, LOCALES } from "@/lib/i18n";
import { getPortfolioPath, getServicePath } from "@/lib/locale-paths";
import {
  createServiceJsonLd,
  createServicePageMetadata,
} from "@/lib/service-page-metadata";
import {
  getServicePage,
  getServiceProofProjects,
  getServiceUi,
  serviceSlugs,
} from "@/lib/service-pages";

const siteUrl = "https://catalystforge.web.id";

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}

describe("service page copy", () => {
  it.each(serviceSlugs)("%s has complete copy in every locale", (slug) => {
    for (const locale of LOCALES) {
      const page = getServicePage(locale, slug);
      const strings = collectStrings(page);

      expect(strings.length).toBeGreaterThan(30);
      for (const text of strings) {
        expect(text.trim(), `${locale}/${slug}`).not.toBe("");
      }
      expect(page.problems).toHaveLength(3);
      expect(page.outcomes).toHaveLength(3);
      expect(page.deliverables).toHaveLength(4);
      expect(page.workflow).toHaveLength(3);
      expect(page.faq.length).toBeGreaterThanOrEqual(4);
    }
  });

  it.each(serviceSlugs)("%s keeps the same shape in id and en", (slug) => {
    const id = getServicePage("id", slug);
    const en = getServicePage("en", slug);

    expect(en.problems).toHaveLength(id.problems.length);
    expect(en.outcomes).toHaveLength(id.outcomes.length);
    expect(en.deliverables).toHaveLength(id.deliverables.length);
    expect(en.workflow).toHaveLength(id.workflow.length);
    expect(en.faq).toHaveLength(id.faq.length);
    expect(en.demoHref).toBe(id.demoHref);
  });

  it.each(serviceSlugs)("%s is actually translated", (slug) => {
    const id = getServicePage("id", slug);
    const en = getServicePage("en", slug);

    for (const field of [
      "headline",
      "lede",
      "metaTitle",
      "metaDescription",
      "primaryCta",
      "proofText",
      "problemsTitle",
    ] as const) {
      expect(en[field], field).not.toBe(id[field]);
    }
    expect(en.faq.map((item) => item.answer)).not.toEqual(
      id.faq.map((item) => item.answer),
    );
  });

  it.each(serviceSlugs)("%s has search-friendly meta lengths", (slug) => {
    for (const locale of LOCALES) {
      const page = getServicePage(locale, slug);

      // "<title> | CatalystForge" should stay within roughly 60 characters.
      expect(page.metaTitle.length).toBeLessThanOrEqual(48);
      expect(page.metaDescription.length).toBeGreaterThanOrEqual(110);
      expect(page.metaDescription.length).toBeLessThanOrEqual(160);
      // The hero paragraph must add to the headline, not repeat the meta text.
      expect(page.lede).not.toBe(page.metaDescription);
    }
  });

  it("uses the same section labels for both locales", () => {
    expect(Object.keys(getServiceUi("en")).sort()).toEqual(
      Object.keys(getServiceUi("id")).sort(),
    );
  });
});

describe("service page proof", () => {
  it.each(serviceSlugs)(
    "%s links to portfolio entries in both locales",
    (slug) => {
      const id = getServiceProofProjects("id", slug);
      const en = getServiceProofProjects("en", slug);

      expect(id.length).toBeGreaterThan(0);
      expect(en).toHaveLength(id.length);

      for (const locale of LOCALES) {
        const slugs = getMessages(locale).portfolioPage.projects.map(
          (project) => project.slug,
        );

        for (const project of getServiceProofProjects(locale, slug)) {
          expect(slugs).toContain(project.slug);
          expect(getPortfolioPath(locale, project.slug)).toMatch(
            locale === "en" ? /^\/en\/portfolio\// : /^\/portfolio\//,
          );
        }
      }
    },
  );

  it("points each product service at its own demo case study", () => {
    const expected = {
      "company-profile": "company-profile-demo",
      "custom-crm": "crm-demo",
      "custom-hris": "hris-demo",
      "custom-pos": "pos-demo",
    } as const;

    for (const [slug, project] of Object.entries(expected)) {
      for (const locale of LOCALES) {
        const slugs = getServiceProofProjects(
          locale,
          slug as keyof typeof expected,
        ).map((item) => item.slug);
        expect(slugs).toEqual([project]);
      }
    }

    expect(
      getServiceProofProjects("en", "ai-support").map((item) => item.slug),
    ).toEqual(["pomeng-chatbot", "ai-support-demo"]);
  });

  it("uses the demo URL of the matching portfolio product", () => {
    for (const slug of serviceSlugs) {
      const { demoHref } = getServicePage("id", slug);
      const demoUrls = getServiceProofProjects("id", slug).map(
        (project) => project.demoUrl,
      );
      expect(demoUrls).toContain(demoHref);
    }
  });
});

describe("service page metadata", () => {
  it.each(serviceSlugs)("%s has canonical, hreflang and og data", (slug) => {
    for (const locale of LOCALES) {
      const metadata = createServicePageMetadata(locale, slug);
      const path = getServicePath(locale, slug);
      const page = getServicePage(locale, slug);

      expect(metadata.title).toEqual({
        absolute: `${page.metaTitle} | CatalystForge`,
      });
      expect(metadata.description).toBe(page.metaDescription);
      expect(metadata.alternates?.canonical).toBe(path);
      expect(metadata.alternates?.languages).toEqual({
        id: `/${slug}`,
        en: `/en/${slug}`,
        "x-default": `/${slug}`,
      });
      expect(metadata.openGraph?.url).toBe(`${siteUrl}${path}`);
      expect(metadata.openGraph).toMatchObject({
        locale: locale === "en" ? "en_US" : "id_ID",
      });
    }
  });

  it.each(serviceSlugs)("%s describes the page in JSON-LD", (slug) => {
    for (const locale of LOCALES) {
      const [service, faq] = createServiceJsonLd(locale, slug);
      const page = getServicePage(locale, slug);

      expect(service).toMatchObject({
        "@type": "Service",
        url: `${siteUrl}${getServicePath(locale, slug)}`,
      });
      expect(faq).toMatchObject({ "@type": "FAQPage" });
      expect((faq as { mainEntity: unknown[] }).mainEntity).toHaveLength(
        page.faq.length,
      );
    }
  });
});

describe("sitemap", () => {
  it("lists every service page in every locale", () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const slug of serviceSlugs) {
      expect(urls).toContain(`${siteUrl}/${slug}`);
      expect(urls).toContain(`${siteUrl}/en/${slug}`);
    }
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("homepage links to service pages", () => {
  const servicePaths = (locale: "id" | "en") =>
    serviceSlugs.map((slug) => getServicePath(locale, slug));

  it("links offers and products to the page in the same language", () => {
    for (const locale of LOCALES) {
      const messages = getMessages(locale);
      const valid = servicePaths(locale);

      for (const offer of messages.offers.items) {
        // Packages spanning several services point at a homepage section.
        if (offer.href.startsWith("#")) continue;
        expect(valid, `${locale} offer ${offer.name}`).toContain(offer.href);
      }
      for (const product of messages.products.items) {
        expect(valid, `${locale} product ${product.name}`).toContain(
          product.serviceHref,
        );
      }
    }
  });

  it("reaches every service page from the products section", () => {
    for (const locale of LOCALES) {
      const linked = getMessages(locale).products.items.map(
        (product) => product.serviceHref,
      );
      expect([...linked].sort()).toEqual([...servicePaths(locale)].sort());
    }
  });
});

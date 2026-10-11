import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { getMessages, LOCALES } from "@/lib/i18n";
import { getPortfolioPath, getServicePath } from "@/lib/locale-paths";
import { getServiceProofProjects, serviceSlugs } from "@/lib/service-pages";

function render(locale: "id" | "en", slug: (typeof serviceSlugs)[number]) {
  return renderToStaticMarkup(
    <ServiceLandingPage
      locale={locale}
      messages={getMessages(locale)}
      slug={slug}
    />,
  );
}

function hrefs(html: string): string[] {
  return [...html.matchAll(/href="([^"]*)"/g)].map((match) => match[1] ?? "");
}

describe("ServiceLandingPage", () => {
  for (const locale of LOCALES) {
    for (const slug of serviceSlugs) {
      describe(`${locale}/${slug}`, () => {
        const html = render(locale, slug);
        const links = hrefs(html);

        it("has exactly one h1 inside the instant hero reveal", () => {
          expect(html.match(/<h1[ >]/g)).toHaveLength(1);
          // Above-the-fold content must not wait for the scroll observer.
          const hero = html.slice(0, html.indexOf("<h1"));
          expect(hero).toContain("reveal-instant");
          expect(hero).not.toContain("reveal-motion");
        });

        it("links to the other service pages in the same language", () => {
          for (const other of serviceSlugs.filter((s) => s !== slug)) {
            expect(links).toContain(getServicePath(locale, other));
          }
        });

        it("does not list the page itself among the other services", () => {
          const related = html.slice(html.indexOf('id="related"'));
          const relatedLinks = hrefs(
            related.slice(0, related.indexOf("</section>")),
          );

          expect(relatedLinks).toHaveLength(serviceSlugs.length - 1);
          expect(relatedLinks).not.toContain(getServicePath(locale, slug));
        });

        it("links to its portfolio case studies in the same language", () => {
          for (const project of getServiceProofProjects(locale, slug)) {
            expect(links).toContain(getPortfolioPath(locale, project.slug));
          }
        });

        it("offers the language switch to the matching page", () => {
          expect(links).toContain(getServicePath("id", slug));
          expect(links).toContain(getServicePath("en", slug));
        });

        it("keeps the company WhatsApp number and prefills the service", () => {
          const whatsapp = links.filter((href) => href.includes("wa.me"));

          expect(whatsapp.length).toBeGreaterThan(0);
          for (const href of whatsapp) {
            expect(href).toContain("https://wa.me/6285121145387?text=");
          }
        });

        it("preselects the matching need in the contact form", () => {
          expect(html).toMatch(/<option value="[^"]+" selected="">/);
        });

        it("emits Service and FAQPage structured data", () => {
          const match = html.match(
            /<script type="application\/ld\+json">(.*?)<\/script>/,
          );
          const data = JSON.parse(match?.[1] ?? "[]") as Array<{
            "@type": string;
          }>;

          expect(data.map((item) => item["@type"])).toEqual([
            "Service",
            "FAQPage",
          ]);
        });
      });
    }
  }

  it("does not leak Indonesian section labels into the English pages", () => {
    for (const slug of serviceSlugs) {
      const html = render("en", slug);

      for (const label of [
        "Rumusan Masalah",
        "Cocok untuk",
        "Estimasi pengerjaan",
        "Lihat studi kasus",
        "Pertanyaan yang sering muncul",
      ]) {
        expect(html).not.toContain(label);
      }
    }
  });

  it("does not leak English section labels into the Indonesian pages", () => {
    for (const slug of serviceSlugs) {
      const html = render("id", slug);

      for (const label of [
        "What you get",
        "Best for",
        "Typical timeline",
        "Questions we often hear",
      ]) {
        expect(html).not.toContain(label);
      }
    }
  });
});

import { getMessages, type Locale } from "@/lib/i18n";
import { renderOgImage } from "@/lib/og-image";
import {
  getServicePage,
  getServiceUi,
  type ServiceSlug,
} from "@/lib/service-pages";

const homeCard: Record<Locale, { title: string; description: string }> = {
  id: {
    title: "Website, Sistem Operasional, dan AI Automation",
    description:
      "Company profile, CRM, HRIS, POS, dashboard, dan workflow automation untuk bisnis Indonesia.",
  },
  en: {
    title: "Websites, Operational Systems, and AI Automation",
    description:
      "Company profiles, CRM, HRIS, POS, dashboards, and workflow automation for Indonesian businesses.",
  },
};

export function renderHomeOgImage(locale: Locale) {
  return renderOgImage({
    ...homeCard[locale],
    chips: ["Company Profile", "Operational System", "AI Automation"],
  });
}

export function renderAboutOgImage(locale: Locale) {
  const a = getMessages(locale).aboutPage;
  const members = [a.team.bagas, a.team.alana, a.team.hambali, a.team.faiz];

  return renderOgImage({
    eyebrow: a.hero.eyebrow,
    title: a.hero.headline,
    description: a.hero.subheadline,
    chips: members.map((member) => member.role),
  });
}

export function renderPortfolioOgImage(locale: Locale) {
  const p = getMessages(locale).portfolioPage;

  return renderOgImage({
    eyebrow: p.hero.eyebrow,
    title: p.hero.headline,
    description: p.hero.subheadline,
    chips: p.projects
      .filter((project) => project.kind === "client")
      .map((project) => project.client),
  });
}

export function renderProjectOgImage(locale: Locale, slug: string) {
  const p = getMessages(locale).portfolioPage;
  const project = p.projects.find((item) => item.slug === slug);

  if (!project) return renderPortfolioOgImage(locale);

  return renderOgImage({
    eyebrow: [p.hero.eyebrow, project.category, project.year]
      .filter(Boolean)
      .join(" · "),
    title: project.title,
    description: project.sector
      ? `${project.client} — ${project.sector}`
      : project.client,
    chips: project.tech,
  });
}

export function renderServiceOgImage(locale: Locale, slug: ServiceSlug) {
  const page = getServicePage(locale, slug);
  const ui = getServiceUi(locale);

  return renderOgImage({
    eyebrow: page.eyebrow,
    title: page.metaTitle,
    description: page.summary,
    chips: [`${ui.estimate}: ${page.timeline}`],
  });
}

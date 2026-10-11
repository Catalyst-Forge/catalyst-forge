import { getMessages, type Locale, type Messages } from "@/lib/i18n";
import { servicePagesEn, serviceUiEn } from "@/lib/service-pages-en";
import { servicePagesId, serviceUiId } from "@/lib/service-pages-id";

/*
 * Service landing pages are server-rendered only. Their copy lives in
 * lib/service-pages-<locale>.ts instead of messages/*.json because the full
 * message dictionary is passed to client components (the contact form), so
 * every extra kilobyte there ships to every page.
 */

export const serviceSlugs = [
  "company-profile",
  "custom-crm",
  "custom-hris",
  "custom-pos",
  "ai-support",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export type ServiceStep = {
  label: string;
  text: string;
};

export type ServiceFaq = {
  answer: string;
  question: string;
};

/** Everything on a service page that depends on the language. */
export type ServiceCopy = {
  /** Footer-sized name, also used on the cards linking to other services. */
  shortName: string;
  /** One line describing the service on those cards. */
  summary: string;
  /** <title> without the brand suffix. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  /** The page's single <h1>. */
  headline: string;
  /** Hero paragraph. Must add to the headline, not repeat it. */
  lede: string;
  primaryCta: string;
  demoCta: string;
  timeline: string;
  bestFor: string;
  problemsTitle: string;
  problems: string[];
  outcomes: string[];
  deliverables: string[];
  workflow: ServiceStep[];
  proofTitle: string;
  proofText: string;
  faq: ServiceFaq[];
  ctaHeadline: string;
  ctaSubtext: string;
  /** Prefilled WhatsApp message so sales knows which service was asked about. */
  whatsappMessage: string;
};

/** Section labels shared by every service page of one language. */
export type ServiceUiCopy = {
  estimate: string;
  bestFor: string;
  problemsEyebrow: string;
  scopeEyebrow: string;
  scopeTitle: string;
  outcomesTitle: string;
  deliverablesTitle: string;
  processEyebrow: string;
  processTitle: string;
  step: string;
  proofEyebrow: string;
  projectKindClient: string;
  projectKindProduct: string;
  viewCaseStudy: string;
  tryDemo: string;
  demoNote: string;
  faqEyebrow: string;
  faqTitle: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedCta: string;
};

type ServiceBase = {
  /** Public demo of the matching product. */
  demoHref: string;
  /**
   * Portfolio projects that back the service, by their Indonesian slug. Other
   * languages are paired by position because project slugs can be translated.
   */
  proofSlugs: string[];
};

const serviceBase: Record<ServiceSlug, ServiceBase> = {
  "company-profile": {
    demoHref: "https://company.catalystforge.web.id",
    proofSlugs: ["company-profile-demo"],
  },
  "custom-crm": {
    demoHref: "https://crm.catalystforge.web.id",
    proofSlugs: ["crm-demo"],
  },
  "custom-hris": {
    demoHref: "https://hris.catalystforge.web.id",
    proofSlugs: ["hris-demo"],
  },
  "custom-pos": {
    demoHref: "https://pos.catalystforge.web.id",
    proofSlugs: ["pos-demo"],
  },
  "ai-support": {
    demoHref: "https://ai.catalystforge.web.id",
    proofSlugs: ["pomeng-chatbot", "ai-support-demo"],
  },
};

const copy: Record<Locale, Record<ServiceSlug, ServiceCopy>> = {
  id: servicePagesId,
  en: servicePagesEn,
};

const uiCopy: Record<Locale, ServiceUiCopy> = {
  id: serviceUiId,
  en: serviceUiEn,
};

export type ServicePage = ServiceCopy & {
  demoHref: string;
  slug: ServiceSlug;
};

export function getServicePage(locale: Locale, slug: ServiceSlug): ServicePage {
  return { ...copy[locale][slug], ...serviceBase[slug], slug };
}

export function getServiceUi(locale: Locale): ServiceUiCopy {
  return uiCopy[locale];
}

export type PortfolioProject = Messages["portfolioPage"]["projects"][number];

/** The portfolio entries that back a service, in the requested language. */
export function getServiceProofProjects(
  locale: Locale,
  slug: ServiceSlug,
): PortfolioProject[] {
  const reference = getMessages("id").portfolioPage.projects;
  const localized = getMessages(locale).portfolioPage.projects;

  return serviceBase[slug].proofSlugs.flatMap((proofSlug) => {
    const project = localized[reference.findIndex((p) => p.slug === proofSlug)];
    return project ? [project] : [];
  });
}

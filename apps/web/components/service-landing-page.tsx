import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileCheck2,
  Sparkles,
  Target,
} from "lucide-react";
import { type Locale, type Messages } from "@/lib/i18n";
import { getServicePath } from "@/lib/locale-paths";
import {
  createServiceJsonLd,
  getServiceLanguagePaths,
} from "@/lib/service-page-metadata";
import {
  getServicePage,
  getServiceProofProjects,
  getServiceUi,
  serviceSlugs,
  type ServiceSlug,
} from "@/lib/service-pages";
import { ConversionLink } from "./conversion-link";
import { CtaSection } from "./cta-section";
import { FloatingWhatsapp } from "./floating-whatsapp";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { Reveal } from "./reveal";
import { ServiceProofCard } from "./service-proof";

type ServiceLandingPageProps = {
  locale: Locale;
  messages: Messages;
  slug: ServiceSlug;
};

export function ServiceLandingPage({
  locale,
  messages,
  slug,
}: ServiceLandingPageProps) {
  const page = getServicePage(locale, slug);
  const ui = getServiceUi(locale);
  const proofProjects = getServiceProofProjects(locale, slug);
  const alternateHrefs = getServiceLanguagePaths(slug);
  const otherServices = serviceSlugs.filter((other) => other !== slug);

  // "<" is escaped so no copy can ever close the script tag early.
  const jsonLd = JSON.stringify(createServiceJsonLd(locale, slug)).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <Navbar
        alternateHrefs={alternateHrefs}
        locale={locale}
        messages={messages}
      />
      <main
        className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E] outline-none"
        id="main-content"
        tabIndex={-1}
      >
        <section className="relative isolate overflow-hidden bg-[#163453] text-white">
          <Image
            alt=""
            className="object-cover opacity-[0.18]"
            fill
            priority
            sizes="100vw"
            src="/logo-background.webp"
          />
          {/* /88 is not on Tailwind's opacity scale, so that class was never
              generated and the watermark showed through at full strength. */}
          <div className="absolute inset-0 bg-[#163453]/90" />
          <div className="section-container relative z-10 flex min-h-[78svh] items-center py-12 sm:py-16 md:py-20">
            <Reveal className="max-w-4xl" direction="up" instant>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFB79C] sm:text-base">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 max-w-5xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {page.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 sm:text-xl">
                {page.lede}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D0490F] px-6 py-3 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#B83D0B] sm:px-7"
                  href="#contact"
                >
                  {page.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <ConversionLink
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 sm:px-7"
                  eventLabel={`service_demo_${page.slug}`}
                  eventName="demo_click"
                  href={page.demoHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  {page.demoCta}
                  <ExternalLink className="h-5 w-5" />
                </ConversionLink>
              </div>

              <dl className="mt-6 grid gap-3 sm:mt-9 sm:grid-cols-[1fr_2fr]">
                {[
                  { label: ui.estimate, value: page.timeline },
                  { label: ui.bestFor, value: page.bestFor },
                ].map((item) => (
                  <div
                    className="rounded-lg border border-white/15 bg-white/10 p-3.5 backdrop-blur sm:p-4"
                    key={item.label}
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFB79C]">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold leading-6 text-white/86">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section
          className="section-padding scroll-mt-40 overflow-hidden bg-white"
          id="problems"
        >
          <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal direction="left">
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
                {ui.problemsEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {page.problemsTitle}
              </h2>
            </Reveal>

            <ul className="grid gap-4">
              {page.problems.map((problem, index) => (
                <li key={problem}>
                  <Reveal delay={index * 90} direction="right">
                    <div className="flex gap-4 rounded-lg border border-slate-200 bg-[#FAF8F5] p-5 shadow-sm">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EF] text-[#E8531A]">
                        <Target className="h-5 w-5" />
                      </span>
                      <p className="text-base font-semibold leading-relaxed text-[#1A1A2E]/78">
                        {problem}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section-padding scroll-mt-40 overflow-hidden bg-[#FAF8F5]"
          id="scope"
        >
          <div className="section-container">
            <Reveal className="max-w-3xl" direction="up">
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
                {ui.scopeEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {ui.scopeTitle}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Reveal direction="left">
                <div className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF4EF] text-[#E8531A]">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-[#1B3A5C]">
                      {ui.outcomesTitle}
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-4">
                    {page.outcomes.map((outcome) => (
                      <Point key={outcome} text={outcome} />
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="right">
                <div className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFF4EF] text-[#E8531A]">
                      <FileCheck2 className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-[#1B3A5C]">
                      {ui.deliverablesTitle}
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-4">
                    {page.deliverables.map((deliverable) => (
                      <Point key={deliverable} text={deliverable} />
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="section-padding scroll-mt-40 overflow-hidden bg-white"
          id="process"
        >
          <div className="section-container">
            <Reveal className="max-w-3xl" direction="up">
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
                {ui.processEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {ui.processTitle}
              </h2>
            </Reveal>

            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {page.workflow.map((step, index) => (
                <li key={step.label}>
                  <Reveal className="h-full" delay={index * 100} direction="up">
                    <div className="h-full rounded-lg border border-slate-200 bg-[#FAF8F5] p-5 shadow-sm sm:p-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#1B3A5C]/12 bg-white px-3 py-1.5 text-xs font-bold text-[#1B3A5C]">
                        <Clock3 className="h-4 w-4 text-[#E8531A]" />
                        {ui.step} {index + 1}
                      </span>
                      <h3 className="mt-5 text-xl font-bold text-[#1B3A5C]">
                        {step.label}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-[#1A1A2E]/72">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {proofProjects.length > 0 ? (
          <section
            className="section-padding scroll-mt-40 overflow-hidden bg-[#1B3A5C] text-white"
            id="proof"
          >
            <div className="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <Reveal direction="left">
                <p className="text-base font-bold uppercase tracking-[0.16em] text-[#FFB79C]">
                  {ui.proofEyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
                  {page.proofTitle}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/74 sm:text-lg">
                  {page.proofText}
                </p>
                {proofProjects.some((project) => project.demoUrl) ? (
                  <p className="mt-5 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold leading-6 text-white/80">
                    {ui.demoNote}
                  </p>
                ) : null}
              </Reveal>

              <div className="grid gap-5">
                {proofProjects.map((project, index) => (
                  <Reveal
                    delay={index * 100}
                    direction="right"
                    key={project.slug}
                  >
                    <ServiceProofCard
                      locale={locale}
                      project={project}
                      service={slug}
                      ui={ui}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section
          className="section-padding scroll-mt-40 overflow-hidden bg-white"
          id="faq"
        >
          <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal direction="left">
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
                {ui.faqEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {ui.faqTitle}
              </h2>
            </Reveal>
            <div className="grid gap-4">
              {page.faq.map((item, index) => (
                <Reveal
                  delay={index * 90}
                  direction="right"
                  key={item.question}
                >
                  <div className="rounded-lg border border-slate-200 bg-[#FAF8F5] p-5">
                    <h3 className="text-lg font-bold text-[#1B3A5C]">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#1A1A2E]/72">
                      {item.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-padding scroll-mt-40 overflow-hidden bg-[#FAF8F5]"
          id="related"
        >
          <div className="section-container">
            <Reveal className="max-w-3xl" direction="up">
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
                {ui.relatedEyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {ui.relatedTitle}
              </h2>
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((other, index) => {
                const service = getServicePage(locale, other);

                return (
                  <li key={other}>
                    <Reveal
                      className="h-full"
                      delay={index * 80}
                      direction="up"
                    >
                      <a
                        className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#E8531A]/30 hover:shadow-lg"
                        href={getServicePath(locale, other)}
                      >
                        <h3 className="text-xl font-bold text-[#1B3A5C]">
                          {service.shortName}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-[#1A1A2E]/72">
                          {service.summary}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-base font-bold text-[#D0490F] transition group-hover:text-[#1B3A5C]">
                          {ui.relatedCta}
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </a>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <CtaSection
          defaultNeed={slug}
          headline={page.ctaHeadline}
          messages={messages}
          subtext={page.ctaSubtext}
          whatsappMessage={page.whatsappMessage}
        />
      </main>
      <Footer
        alternateHrefs={alternateHrefs}
        locale={locale}
        messages={messages}
      />
      <FloatingWhatsapp message={page.whatsappMessage} messages={messages} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}

function Point({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8531A]" />
      <p className="text-base font-semibold leading-relaxed text-[#1A1A2E]/76">
        {text}
      </p>
    </li>
  );
}

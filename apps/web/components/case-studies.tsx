import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { type Messages } from "@/lib/i18n";
import { getPortfolioPath } from "@/lib/locale-paths";
import { isLocale } from "@/lib/locales";
import { Reveal } from "./reveal";
import { ScrollParallax } from "./scroll-parallax";

type CaseStudiesProps = {
  messages: Messages;
};

export function CaseStudies({ messages }: CaseStudiesProps) {
  const locale = isLocale(messages.locale) ? messages.locale : "id";
  // Client projects from the portfolio are the single source for these cards.
  const projects = messages.portfolioPage.projects.filter(
    (project) => project.kind === "client",
  );

  return (
    <section className="section-padding overflow-hidden bg-[#FAF8F5]">
      <div className="section-container">
        <ScrollParallax
          className="mx-auto max-w-3xl scroll-mt-40 text-center"
          id="projects"
          maxOffset={38}
        >
          <Reveal direction="up">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#E8531A]">
              {messages.caseStudies.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
              {messages.caseStudies.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A2E]/72 sm:mt-6 sm:text-lg">
              {messages.caseStudies.description}
            </p>
          </Reveal>
        </ScrollParallax>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {projects.map((project, index) => (
            <Reveal
              className="h-full"
              delay={index * 120}
              direction={index % 2 === 0 ? "left" : "right"}
              key={project.slug}
            >
              <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#E8531A]">
                  {project.sector}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1B3A5C] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-base font-semibold leading-relaxed text-[#1A1A2E]/72">
                  {project.client}
                </p>
                <p className="mt-5 border-t border-slate-200 pt-5 text-base leading-relaxed text-[#1A1A2E]/74">
                  {project.summary}
                </p>

                <div className="mt-6 rounded-lg border border-[#E8531A]/12 bg-[#FFF4EF] p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#E8531A]">
                    {messages.caseStudies.metricsLabel}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {project.metrics.map((metric) => (
                      <div className="flex gap-2" key={metric}>
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8531A]" />
                        <span className="text-sm font-semibold leading-6 text-[#1A1A2E]/76">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-[#D0490F] transition hover:text-[#1B3A5C]"
                  href={getPortfolioPath(locale, project.slug)}
                >
                  {messages.portfolioPage.viewCaseStudy}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex items-center gap-3 rounded-full bg-[#D0490F] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#F4784A] hover:scale-[1.02] active:scale-[0.98]"
            href={getPortfolioPath(locale)}
          >
            {messages.caseStudies.portfolioCta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

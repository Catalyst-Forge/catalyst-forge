import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { type Messages } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { ScrollParallax } from "@/components/scroll-parallax";
import { getPortfolioPath } from "@/lib/locale-paths";
import { ProjectCover } from "@/app/components/project-cover";

type PortfolioPageProps = {
  messages: Messages;
  locale: "id" | "en";
};

type Project = Messages["portfolioPage"]["projects"][number];

export function PortfolioPage({ messages, locale }: PortfolioPageProps) {
  const p = messages.portfolioPage;
  const clientProjects = p.projects.filter((proj) => proj.kind === "client");
  const productProjects = p.projects.filter((proj) => proj.kind === "product");

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3A5C] via-[#1B3A5C] to-[#0F2440] pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="section-container relative z-10">
          <ScrollParallax maxOffset={40}>
            <Reveal direction="up" instant>
              <Link
                className="mb-6 inline-flex items-center gap-2 text-base font-semibold text-white/80 transition hover:text-white"
                href="/"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === "id" ? "Kembali ke Beranda" : "Back to Home"}
              </Link>
              <p className="text-base font-bold uppercase tracking-[0.16em] text-[#F4B350]">
                {p.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                {p.hero.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:mt-6">
                {p.hero.subheadline}
              </p>
            </Reveal>
          </ScrollParallax>
        </div>
      </section>

      <ProjectSection
        eyebrow={p.clientSection.eyebrow}
        headline={p.clientSection.headline}
        subtext={p.clientSection.subtext}
      >
        {clientProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.slug}
            locale={locale}
            messages={messages}
            project={project}
          />
        ))}
      </ProjectSection>

      <ProjectSection
        className="border-t border-slate-200 bg-white"
        eyebrow={p.productSection.eyebrow}
        headline={p.productSection.headline}
        subtext={p.productSection.subtext}
      >
        {productProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.slug}
            locale={locale}
            messages={messages}
            project={project}
          />
        ))}
      </ProjectSection>

      {/* CTA */}
      <section className="section-padding border-t border-slate-200">
        <div className="section-container text-center">
          <ScrollParallax maxOffset={30}>
            <Reveal direction="up">
              <h2 className="text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {p.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A2E]/70">
                {p.cta.subtext}
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D0490F] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#F4784A] hover:scale-[1.02] active:scale-[0.98]"
                href={`https://wa.me/6285121379282?text=${encodeURIComponent(
                  locale === "id"
                    ? "Halo CatalystForge, saya tertarik dengan portfolio project Anda"
                    : "Hello CatalystForge, I'm interested in your project portfolio",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta.button}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Reveal>
          </ScrollParallax>
        </div>
      </section>
    </main>
  );
}

function ProjectSection({
  eyebrow,
  headline,
  subtext,
  className = "",
  children,
}: {
  eyebrow: string;
  headline: string;
  subtext: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="section-container">
        <Reveal direction="up">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#D0490F]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-4xl">
            {headline}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#1A1A2E]/70 sm:text-lg">
            {subtext}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  locale,
  messages,
}: {
  project: Project;
  index: number;
  locale: "id" | "en";
  messages: Messages;
}) {
  return (
    <Reveal
      className="h-full"
      delay={index * 80}
      direction={index % 2 === 0 ? "left" : "right"}
    >
      <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Thumbnail */}
        <Link
          className="relative block h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-[#1B3A5C] to-[#0F2440]"
          href={getPortfolioPath(locale, project.slug)}
        >
          {project.image ? (
            <Image
              alt={project.title}
              className="object-cover transition duration-500 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              src={project.image}
            />
          ) : (
            <ProjectCover
              category={project.category}
              client={project.client}
            />
          )}
          {project.demoUrl ? (
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur transition hover:bg-white/25">
              <ExternalLink className="h-3 w-3" />
              Demo
            </span>
          ) : null}
        </Link>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#FFF4EF] px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.12em] text-[#E8531A]">
              {project.category}
            </span>
            {project.year ? (
              <span className="text-xs font-semibold text-[#1A1A2E]/45">
                {project.year}
              </span>
            ) : null}
          </div>

          <Link
            className="mt-3 block text-xl font-bold tracking-tight text-[#1B3A5C] hover:text-[#E8531A] transition-colors"
            href={getPortfolioPath(locale, project.slug)}
          >
            {project.title}
          </Link>
          <p className="mt-1 text-sm font-semibold text-[#E8531A]">
            {project.client}
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#1A1A2E]/70">
            {project.summary}
          </p>

          {/* Tech Stack */}
          {project.tech.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  className="rounded-md bg-[#FAF8F5] px-2 py-1 text-xs font-semibold text-[#1B3A5C]/80"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* Metrics */}
          <div className="mt-5 rounded-lg border border-[#E8531A]/12 bg-[#FFF4EF] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E8531A]">
              {messages.portfolioPage.metricsLabel}
            </p>
            <div className="mt-2.5 grid gap-1.5">
              {project.metrics.map((m) => (
                <div className="flex gap-2" key={m}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E8531A]" />
                  <span className="text-sm font-semibold leading-6 text-[#1A1A2E]/75">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Client work leads to its case study; demos are a secondary action. */}
          <div className="mt-auto pt-5">
            {project.kind === "client" ? (
              <Link
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D0490F] px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-[#F4784A]"
                href={getPortfolioPath(locale, project.slug)}
              >
                {messages.portfolioPage.viewCaseStudy}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : project.demoUrl ? (
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D0490F]/40 bg-white px-5 py-2.5 text-sm font-bold text-[#D0490F] transition hover:border-[#D0490F] hover:bg-[#FFF4EF]"
                href={project.demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {messages.portfolioPage.viewDemo}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <Link
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-[#FAF8F5] px-5 py-2.5 text-sm font-bold text-[#1B3A5C]/75 transition hover:bg-white hover:border-[#E8531A]/30"
                href={getPortfolioPath(locale, project.slug)}
              >
                {messages.portfolioPage.viewDetail}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

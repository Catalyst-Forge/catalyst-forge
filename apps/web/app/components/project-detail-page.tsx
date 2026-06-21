import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";
import { type Messages } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { ScrollParallax } from "@/components/scroll-parallax";

type ProjectDetailPageProps = {
  messages: Messages;
  locale: "id" | "en";
  slug: string;
  notFound: boolean;
};

export function ProjectDetailPage({
  messages,
  locale,
  slug,
  notFound,
}: ProjectDetailPageProps) {
  const p = messages.portfolioPage;
  const project = p.projects.find((proj) => proj.slug === slug);

  if (notFound || !project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAF8F5]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1B3A5C]">404</h1>
          <p className="mt-3 text-lg text-[#1A1A2E]/60">
            {locale === "id"
              ? "Project tidak ditemukan."
              : "Project not found."}
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D0490F] px-6 py-3 text-base font-bold text-white transition hover:bg-[#F4784A]"
            href="/portfolio"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "id" ? "Kembali ke Portfolio" : "Back to Portfolio"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3A5C] via-[#1B3A5C] to-[#0F2440] pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="section-container relative z-10">
          <ScrollParallax maxOffset={40}>
            <Reveal direction="up">
              <Link
                className="mb-6 inline-flex items-center gap-2 text-base font-semibold text-white/80 transition hover:text-white"
                href="/portfolio"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === "id"
                  ? "Kembali ke Portfolio"
                  : "Back to Portfolio"}
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#FFF4EF] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#E8531A]">
                  {project.category}
                </span>
                {project.year ? (
                  <span className="text-sm font-semibold text-white/50">
                    {project.year}
                  </span>
                ) : null}
              </div>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 text-xl font-semibold text-[#F4B350]">
                {project.client}
              </p>
            </Reveal>
          </ScrollParallax>
        </div>
      </section>

      {/* Screenshot + Overview */}
      <section className="py-12 sm:py-16">
        <div className="section-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Screenshot */}
          <Reveal direction="left">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
              {project.image ? (
                <Image
                  alt={project.title}
                  className="w-full object-cover"
                  height={450}
                  src={project.image}
                  width={900}
                />
              ) : (
                <div className="flex h-[300px] items-center justify-center bg-gradient-to-br from-[#1B3A5C] to-[#0F2440]">
                  <span className="text-5xl font-black text-white/8">
                    {project.client.split(" ")[0]}
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal direction="right">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-[0.14em] text-[#E8531A]">
                  {locale === "id" ? "Ringkasan" : "Overview"}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-[#1A1A2E]/78">
                  {project.summary}
                </p>
              </div>

              {project.tech.length > 0 ? (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#1B3A5C]/50">
                    Tech Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-[#1B3A5C]"
                        key={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.demoUrl ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[#D0490F] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#F4784A]"
                  href={project.demoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {p.viewDemo}
                  <ExternalLink className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / Solution / Impact */}
      {(project.problem || project.solution || project.impact) ? (
        <section className="py-12 sm:py-16 bg-white">
          <div className="section-container grid gap-8 md:grid-cols-3">
            {project.problem ? (
              <Reveal direction="up" delay={0}>
                <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF4EF] text-[#E8531A]">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1B3A5C]">
                    {locale === "id" ? "Masalah" : "Problem"}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1A1A2E]/74">
                    {project.problem}
                  </p>
                </div>
              </Reveal>
            ) : null}
            {project.solution ? (
              <Reveal direction="up" delay={100}>
                <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8F5E9] text-[#2E7D32]">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1B3A5C]">
                    {locale === "id" ? "Solusi" : "Solution"}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1A1A2E]/74">
                    {project.solution}
                  </p>
                </div>
              </Reveal>
            ) : null}
            {project.impact ? (
              <Reveal direction="up" delay={200}>
                <div className="rounded-xl border border-slate-200 bg-[#FAF8F5] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E3F2FD] text-[#1565C0]">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1B3A5C]">
                    {locale === "id" ? "Dampak" : "Impact"}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1A1A2E]/74">
                    {project.impact}
                  </p>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Features */}
      {project.features && project.features.length > 0 ? (
        <section className="py-12 sm:py-16">
          <div className="section-container">
            <Reveal direction="up">
              <h2 className="text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl">
                {locale === "id" ? "Fitur Utama" : "Key Features"}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f, i) => (
                <Reveal delay={i * 60} direction="up" key={f}>
                  <div className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8531A]" />
                    <span className="text-base font-semibold text-[#1A1A2E]/78">
                      {f}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Metrics */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="section-container">
          <Reveal direction="up">
            <h2 className="text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl">
              {p.metricsLabel}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.metrics.map((m, i) => (
              <Reveal delay={i * 80} direction="up" key={m}>
                <div className="rounded-xl border border-[#E8531A]/12 bg-[#FFF4EF] p-6">
                  <span className="text-3xl font-black text-[#E8531A]/20">
                    0{i + 1}
                  </span>
                  <p className="mt-2 text-base font-bold leading-relaxed text-[#1B3A5C]">
                    {m}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="section-container text-center">
          <ScrollParallax maxOffset={30}>
            <Reveal direction="up">
              <h2 className="text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
                {p.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A2E]/72">
                {p.cta.subtext}
              </p>
              <a
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D0490F] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#F4784A] hover:scale-[1.02] active:scale-[0.98]"
                href={`https://wa.me/6285121379282?text=${encodeURIComponent(
                  locale === "id"
                    ? `Halo CatalystForge, saya tertarik dengan project ${project.title}`
                    : `Hello CatalystForge, I'm interested in the ${project.title} project`,
                )}`}
                rel="noopener noreferrer"
                target="_blank"
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

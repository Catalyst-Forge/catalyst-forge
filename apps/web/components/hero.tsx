import { ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Messages } from "@/lib/i18n";
import { getPortfolioPath } from "@/lib/locale-paths";
import { isLocale } from "@/lib/locales";
import { ParallaxLayer } from "./parallax-layer";
import { Reveal } from "./reveal";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  const locale = isLocale(messages.locale) ? messages.locale : "id";
  const preview = messages.hero.preview;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#1B3A5C] text-white"
      id="top"
    >
      <ParallaxLayer
        className="-inset-y-32 circuit-pattern opacity-90"
        maxOffset={120}
        speed={0.18}
      />
      <ParallaxLayer
        className="-inset-y-32 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,rgba(244,120,74,0.22)_38%,rgba(244,120,74,0.22)_39%,transparent_39%,transparent_100%)]"
        maxOffset={110}
        speed={-0.16}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,120,74,0.18),transparent_30%),linear-gradient(135deg,rgba(27,58,92,0.86),rgba(27,58,92,0.76))]" />

      <div className="section-container relative grid min-h-0 items-center gap-10 py-11 min-[390px]:py-12 sm:min-h-[calc(100svh-5rem)] sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-28">
        <ParallaxLayer className="max-w-4xl" maxOffset={64} speed={-0.08}>
          <Reveal instant direction="left">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold leading-tight text-white sm:mb-8 sm:gap-3 sm:px-5 sm:py-3 sm:text-base">
              <Building2 className="h-4 w-4 shrink-0 text-[#F4784A] sm:h-5 sm:w-5" />
              {messages.hero.badge}
            </div>
          </Reveal>
          <Reveal instant delay={90} direction="left">
            <h1 className="max-w-4xl text-[1.9rem] font-bold leading-[1.1] tracking-tight min-[390px]:text-3xl sm:text-5xl lg:text-6xl">
              {messages.hero.headline}
            </h1>
          </Reveal>
          <Reveal instant delay={170} direction="left">
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/88 sm:mt-7 md:text-xl">
              {messages.hero.subheadline}
            </p>
          </Reveal>

          <Reveal instant delay={250} direction="left">
            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D0490F] px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-[#F4784A] sm:w-auto sm:px-7 sm:py-4"
                href="#offers"
              >
                {messages.hero.primaryCta}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border border-white px-6 py-3.5 text-base font-bold text-white transition hover:bg-white hover:text-[#1B3A5C] sm:w-auto sm:px-7 sm:py-4"
                href="#contact"
              >
                {messages.hero.secondaryCta}
              </a>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
            {messages.hero.trustIndicators.map((indicator, index) => (
              <Reveal
                instant
                delay={320 + index * 70}
                direction={index % 2 === 0 ? "left" : "right"}
                key={indicator}
              >
                <span className="block rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white sm:px-5 sm:py-3 sm:text-base">
                  {indicator}
                </span>
              </Reveal>
            ))}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="fade-in hidden lg:block"
          maxOffset={88}
          speed={0.12}
        >
          <Reveal instant direction="right">
            {/* A real product screen instead of an abstract mock-up. */}
            <figure className="motion-float-slow relative">
              <div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl ring-1 ring-black/5">
                <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F4F5F7] px-4 py-3">
                  <div aria-hidden="true" className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D0490F]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F4B350]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3BAA72]" />
                  </div>
                  <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-xs font-medium text-slate-500">
                    {preview.label}
                  </span>
                </div>
                <Image
                  alt={preview.alt}
                  className="block h-auto w-full"
                  height={720}
                  sizes="(min-width: 1024px) 560px, 1px"
                  src="/images/portfolio/crm.webp"
                  width={1280}
                />
              </div>
              <figcaption className="absolute -bottom-5 left-6">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#1B3A5C] shadow-xl ring-1 ring-black/5 transition hover:text-[#D0490F]"
                  href={getPortfolioPath(locale, "crm-demo")}
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[#3BAA72]"
                  />
                  {preview.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </figcaption>
            </figure>
          </Reveal>
        </ParallaxLayer>
      </div>
    </section>
  );
}

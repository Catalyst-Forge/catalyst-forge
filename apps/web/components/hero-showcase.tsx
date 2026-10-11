"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties, type FocusEvent } from "react";
import { cn } from "@repo/ui/lib/utils";

export type ShowcaseSlide = {
  name: string;
  host: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
};

type HeroShowcaseProps = {
  slides: ShowcaseSlide[];
  label: string;
};

const INTERVAL_MS = 4200;

/**
 * Where a card sits relative to the front one: the next two peek out behind
 * it, the one that just left slides off to the left, the rest wait hidden.
 */
function cardStyle(offset: number, count: number): CSSProperties {
  if (offset === 0) {
    return { transform: "translate3d(0, 0, 0) scale(1)", opacity: 1, zIndex: 30 };
  }
  if (offset === count - 1) {
    return {
      // Short exit so the card never drifts over the headline.
      transform: "translate3d(-9%, 5%, 0) scale(0.9) rotate(-4deg)",
      opacity: 0,
      zIndex: 40,
    };
  }
  // Scaled from the top-right corner, so each card behind shows a strip
  // above and to the right of the one in front of it.
  const depth = Math.min(offset, 3);
  return {
    transform: `translate3d(${depth * 4.5}%, ${depth * -7}%, 0) scale(${1 - depth * 0.08})`,
    opacity: depth > 2 ? 0 : 1 - depth * 0.3,
    zIndex: 30 - depth,
  };
}

/**
 * A stack of product screens that deals itself: every few seconds the front
 * card slides away and the next one moves up, so the hero shows the whole
 * range rather than one product. Hover or focus pauses it; it stays still for
 * visitors who prefer reduced motion.
 */
export function HeroShowcase({ slides, label }: HeroShowcaseProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
    }
  }, []);

  const slide = slides[active] ?? slides[0];
  if (!slide) return null;

  const next = () => setActive((value) => (value + 1) % slides.length);
  const resumeWhenFocusLeaves = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setPaused(false);
    }
  };

  return (
    <section
      aria-label={label}
      className="relative pr-[9%] pt-[16%]"
      onBlur={resumeWhenFocusLeaves}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10]">
        {slides.map((item, index) => {
          const offset = (index - active + slides.length) % slides.length;
          const front = offset === 0;

          return (
            <div
              aria-hidden={!front}
              className="absolute inset-0 origin-top-right transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              key={item.image}
              style={cardStyle(offset, slides.length)}
            >
              <div
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white ring-1 ring-black/5 transition-shadow duration-700",
                  front ? "shadow-2xl" : "shadow-lg",
                )}
              >
                <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F4F5F7] px-4 py-3">
                  <div aria-hidden="true" className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D0490F]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F4B350]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3BAA72]" />
                  </div>
                  <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-xs font-medium text-slate-500">
                    {item.host}
                  </span>
                </div>
                <div className="relative flex-1 bg-[#0B1220]">
                  {/* Every card is on screen in the stack, so none can wait
                      for lazy loading; the first one is preloaded. */}
                  <Image
                    alt={front ? item.alt : ""}
                    className="object-cover object-top"
                    fill
                    loading={index === 0 ? undefined : "eager"}
                    priority={index === 0}
                    sizes="(min-width: 1024px) 560px, 1px"
                    src={item.image}
                  />
                  {/* Cards behind the front one sit in its shade. */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 bg-[#0F2440] transition-opacity duration-700",
                      front ? "opacity-0" : "opacity-30",
                    )}
                  />
                </div>
                {front && !still ? (
                  // The bar drives the rotation: it restarts per card (key),
                  // freezes while paused, and deals the next card when done.
                  <span
                    aria-hidden="true"
                    className="h-1 origin-left bg-[#E8531A]"
                    key={active}
                    onAnimationEnd={next}
                    style={{
                      animation: `showcase-progress ${INTERVAL_MS}ms linear both`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-50 -mt-5 flex items-center justify-between gap-4 pl-6">
        <Link
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#1B3A5C] shadow-xl ring-1 ring-black/5 transition hover:text-[#C4430D]"
          href={slide.href}
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#3BAA72]" />
          {slide.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <div aria-hidden="true" className="mt-5 flex items-center gap-1.5">
          {slides.map((item, index) => (
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === active ? "w-6 bg-[#F4784A]" : "w-1.5 bg-white/35",
              )}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

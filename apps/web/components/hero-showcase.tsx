"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FocusEvent } from "react";
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
  switchLabel: string;
};

const INTERVAL_MS = 4500;

/**
 * Rotates through the product demos so the hero doesn't read as "CRM only".
 * Hovering or focusing pauses it; picking a product stops it for good, and
 * it never auto-rotates for visitors who prefer reduced motion.
 */
export function HeroShowcase({ slides, switchLabel }: HeroShowcaseProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStopped(true);
    }
  }, []);

  const slide = slides[active] ?? slides[0];
  if (!slide) return null;

  const resumeWhenFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setPaused(false);
    }
  };

  return (
    <div
      onBlur={resumeWhenFocusLeaves}
      onFocus={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure className="motion-float-slow relative">
        <div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl ring-1 ring-black/5">
          <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F4F5F7] px-4 py-3">
            <div aria-hidden="true" className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0490F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F4B350]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3BAA72]" />
            </div>
            <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-xs font-medium text-slate-500">
              {slide.host}
            </span>
          </div>
          <div className="relative aspect-[16/9] bg-[#0B1220]">
            {slides.map((item, index) => (
              <Image
                alt={index === active ? item.alt : ""}
                aria-hidden={index !== active}
                className={cn(
                  "object-cover object-top transition-opacity duration-700",
                  index === active ? "opacity-100" : "opacity-0",
                )}
                fill
                key={item.image}
                sizes="(min-width: 1024px) 560px, 1px"
                src={item.image}
              />
            ))}
          </div>
        </div>
        <figcaption className="absolute -bottom-5 left-6">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#1B3A5C] shadow-xl ring-1 ring-black/5 transition hover:text-[#C4430D]"
            href={slide.href}
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#3BAA72]" />
            {slide.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </figcaption>
      </figure>

      <div
        aria-label={switchLabel}
        className="mt-10 flex flex-wrap justify-end gap-2"
        role="group"
      >
        {slides.map((item, index) => {
          const current = index === active;

          return (
            <button
              aria-pressed={current}
              className={cn(
                "relative overflow-hidden rounded-full px-3.5 py-1.5 text-sm font-bold transition",
                current
                  ? "bg-white text-[#1B3A5C]"
                  : "bg-white/10 text-white/85 hover:bg-white/20",
              )}
              key={item.name}
              onClick={() => {
                setActive(index);
                setStopped(true);
              }}
              type="button"
            >
              {item.name}
              {current && !stopped ? (
                // The progress bar drives the rotation: it restarts per slide
                // (key), freezes while paused, and advances when it ends.
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#E8531A]"
                  key={active}
                  onAnimationEnd={() =>
                    setActive((value) => (value + 1) % slides.length)
                  }
                  style={{
                    animation: `showcase-progress ${INTERVAL_MS}ms linear both`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a figure such as "50+" up from zero when it scrolls into view.
 *
 * The server renders the final value, so it reads correctly without
 * JavaScript. Figures already on screen at hydration are left alone (no
 * flash from the final value back to zero), as are reduced-motion users.
 */
export function CountUp({
  value,
  durationMs = 1400,
}: {
  value: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const match = /^(\d+)(.*)$/.exec(value);

    if (!element || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) return;

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    let frame = 0;

    element.textContent = `0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${Math.round(target * eased)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value, durationMs]);

  return (
    <span className="tabular-nums" ref={ref}>
      {value}
    </span>
  );
}

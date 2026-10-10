"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@repo/ui/lib/utils";

type RevealDirection = "left" | "right" | "up" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  /**
   * For above-the-fold content: render visible immediately with a CSS-only
   * entrance instead of waiting for hydration and the IntersectionObserver.
   */
  instant?: boolean;
};

declare global {
  interface Window {
    __revealHydrated?: boolean;
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  instant = false,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tells the root layout's fallback timer that reveals are working.
    window.__revealHydrated = true;

    if (instant) {
      return;
    }

    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [instant]);

  if (instant) {
    return (
      <div
        className={cn(
          "reveal-instant",
          `reveal-instant-${direction}`,
          className,
        )}
        style={{ animationDelay: `${delay}ms` } as CSSProperties}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "reveal-motion",
        `reveal-${direction}`,
        isVisible && "is-visible",
        className,
      )}
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

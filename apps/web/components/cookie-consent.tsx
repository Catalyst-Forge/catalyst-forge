"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale, Messages } from "@/lib/i18n";

type ConsentChoice = "all" | "essential" | null;

/** Banner copy for every locale, passed down from the server layout. */
export type CookieConsentCopy = Record<Locale, Messages["cookieConsent"]>;

const STORAGE_KEY = "cf_cookie_consent";

export function CookieConsent({ copy }: { copy: CookieConsentCopy }) {
  const pathname = usePathname();
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
  const t = copy[locale];
  const [mounted, setMounted] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const visible = mounted && choice === null;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "all" || stored === "essential") {
      setChoice(stored);
    }
    // 2s delay ensures hero section paints first → true LCP element
    const timer = setTimeout(() => setMounted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // While the banner is up, publish its height so the rest of the page can
  // keep clear of it: globals.css pads the end of the document and the scroll
  // area by this much, and the floating WhatsApp button sits above it. That
  // way a keyboard-focused element is never left hidden under the banner.
  useEffect(() => {
    const banner = bannerRef.current;

    if (!visible || !banner) {
      return;
    }

    const root = document.documentElement;
    const publish = () =>
      root.style.setProperty("--cookie-banner-offset", `${banner.offsetHeight}px`);

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(banner);

    return () => {
      observer.disconnect();
      root.style.removeProperty("--cookie-banner-offset");
    };
  }, [visible]);

  const handleAccept = (value: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);

    // Notify Analytics component (same-tab consent change)
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: STORAGE_KEY,
        newValue: value,
      }),
    );
  };

  // Hide until client-side mount to prevent LCP pollution
  if (!visible) {
    return null;
  }

  return (
    // cookie-banner-enter fades in from opacity 0, which also keeps this
    // late-appearing overlay from being measured as the page's LCP element.
    <div
      aria-labelledby={titleId}
      className="cookie-banner-enter fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-200 bg-white/95 shadow-2xl backdrop-blur"
      ref={bannerRef}
      role="region"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-4">
        <div className="min-w-0 text-sm leading-relaxed text-[#1A1A2E]/78">
          <span className="font-bold text-[#1B3A5C]" id={titleId}>
            {t.title}
          </span>{" "}
          {t.body}{" "}
          <Link
            href={locale === "en" ? "/en/privacy" : "/privacy"}
            className="whitespace-nowrap font-semibold text-[#C4430D] underline transition hover:text-[#1B3A5C]"
          >
            {t.privacy}
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => handleAccept("essential")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[#1A1A2E] transition hover:bg-[#FAF8F5]"
          >
            {t.essentialOnly}
          </button>
          <button
            type="button"
            onClick={() => handleAccept("all")}
            className="rounded-full bg-[#D0490F] px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#B83D0B]"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}

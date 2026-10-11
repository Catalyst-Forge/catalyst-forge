"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "cf_cookie_consent";

/**
 * Forwards the cookie banner's choice to Google Consent Mode.
 *
 * layout.tsx defines `gtag` in <head>, denies every consent type and applies a
 * stored "all" choice before `config`. gtag.js itself is injected after the
 * page has loaded; until then `gtag()` only queues commands in `dataLayer`,
 * and gtag.js replays that queue in order. A choice made before or after the
 * script arrives therefore reaches GA the same way.
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    // The banner dispatches this event in the same tab after writing storage;
    // the browser also fires it when another tab changes the choice.
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== CONSENT_KEY || !e.newValue) return;
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
        .gtag;
      if (typeof gtag === "function") {
        gtag("consent", "update", {
          analytics_storage: e.newValue === "all" ? "granted" : "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return null;
}

/**
 * Fire a GA4 event (only if user granted consent).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored !== "all") return;
  const gtag = (
    window as unknown as { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params ?? {});
  }
}

"use client";

import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "cf_cookie_consent";

/**
 * Runtime consent updater.
 *
 * GA4 tag is loaded server-side in layout.tsx (always present in HTML source).
 * This client component reads stored consent and calls gtag('consent','update').
 * Consent default = denied → cookieless pings until user clicks "Terima Semua".
 */
export function Analytics() {
  const [consent, setConsent] = useState<string>("denied");

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) setConsent(stored === "all" ? "granted" : "denied");

    const handleStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY && e.newValue) {
        const next = e.newValue === "all" ? "granted" : "denied";
        setConsent(next);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Update consent state when user accepts/rejects
  const grant = consent === "granted";
  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
      .gtag;
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        analytics_storage: grant ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, [grant]);

  if (!GA_ID) return null;
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

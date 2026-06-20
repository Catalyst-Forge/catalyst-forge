"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "cf_cookie_consent";

/**
 * GA4 + Consent Mode v2 (always-load edition).
 *
 * - GA4 tag ALWAYS loads (Google Tag checker can see it).
 * - Consent default = denied → cookieless pings until user accepts.
 * - When user clicks "Terima Semua", consent updates to granted.
 * - Compliant: no cookies stored without consent.
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

  // Runtime consent update (called after script already loaded)
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

  return (
    <Script id="ga4-consent" strategy="afterInteractive">
      {`
        (function() {
          var gtag = window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.dataLayer = window.dataLayer || [];

          // 1. Default consent: denied
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });

          // 2. Load gtag.js
          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
          s.onload = function() {
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          };
          document.head.appendChild(s);
        })();
      `}
    </Script>
  );
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

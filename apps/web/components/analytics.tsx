"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "cf_cookie_consent";

/**
 * GA4 + Consent Mode v2.
 *
 * - Sets consent default to denied before gtag loads.
 * - Only activates GA4 when user has chosen "all" in cookie banner.
 * - Listens for consent changes via storage events.
 * - Exports trackEvent() for conversion tracking.
 */
export function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setConsent(stored);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) {
        setConsent(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!GA_ID || consent === null) return null;

  const granted = consent === "all";

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
            // 3. Init GA4
            gtag('js', new Date());
            gtag('config', '${GA_ID}');

            // 4. Apply user consent
            gtag('consent', 'update', {
              analytics_storage: '${granted ? "granted" : "denied"}',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            });
          };
          document.head.appendChild(s);
        })();
      `}
    </Script>
  );
}

/**
 * Fire a GA4 event (only if user granted consent).
 * Safe to call from any component — no-op if GA not loaded.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent !== "all") return;
  const gtag = (
    window as unknown as { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params ?? {});
  }
}

"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr:false — must live in a Client Component
// in Next.js 15+ App Router. This ensures the cookie consent
// NEVER appears in the initial HTML, preventing it from
// becoming the LCP element.
const CookieConsent = dynamic(
  () =>
    import("@/components/cookie-consent").then((mod) => mod.CookieConsent),
  { ssr: false },
);

export function CookieConsentLoader() {
  return <CookieConsent />;
}

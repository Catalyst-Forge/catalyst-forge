import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Analytics } from "@/components/analytics";
import { CookieConsentLoader } from "@/components/cookie-consent-loader";
import { UtmCapture } from "@/components/utm-capture";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LEGAL_NAME,
  LINKEDIN_URL,
} from "@/lib/company";
import { getMessages } from "@/lib/i18n";
import "./globals.css";

const siteUrl = "https://catalystforge.web.id";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CatalystForge | Solusi Digital Terpadu",
    template: "%s | CatalystForge",
  },
  description:
    "CatalystForge membangun company profile, CRM, HRIS, POS, AI support, dashboard, dan sistem operasional untuk bisnis Indonesia.",
  keywords: [
    "CatalystForge",
    "company profile",
    "software house Indonesia",
    "CRM",
    "HRIS",
    "POS",
    "AI automation",
  ],
  openGraph: {
    title: "CatalystForge | Solusi Digital Terpadu",
    description:
      "Partner teknologi untuk website korporat, sistem operasional, dashboard, dan otomasi AI.",
    images: [
      {
        alt: "CatalystForge digital solution services",
        height: 630,
        url: "/opengraph-image",
        width: 1200,
      },
    ],
    locale: "id_ID",
    siteName: "CatalystForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CatalystForge | Solusi Digital Terpadu",
    description:
      "Company profile, CRM, HRIS, POS, AI support, dan sistem operasional bisnis.",
    images: ["/twitter-image"],
  },
  icons: {
    // favicon.ico carries 16/32/48px; Google Search wants a multiple of 48.
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: "+6285121145387",
      availableLanguage: ["id", "en"],
    },
  ],
  description:
    "CatalystForge membangun company profile, CRM, HRIS, POS, AI support, dashboard, dan sistem operasional untuk bisnis Indonesia.",
  email: CONTACT_EMAIL,
  legalName: LEGAL_NAME,
  // Google needs at least 112x112 for the logo; the 96px favicon is too small.
  logo: `${siteUrl}/logo-icon-512.png`,
  name: "CatalystForge",
  // Official profiles only; the demo subdomains are not the same entity.
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  url: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  inLanguage: ["id-ID", "en"],
  name: "CatalystForge",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    // Locale layouts correct `lang` before hydration (see HtmlLang).
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Lets scroll reveals hide content only when JavaScript runs; if the
            bundle never hydrates, drop the class so nothing stays hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("reveal-ready");setTimeout(function(){if(!window.__revealHydrated)document.documentElement.classList.remove("reveal-ready")},4000);`,
          }}
        />
        {/* Consent Mode bootstrap. It only queues commands in `dataLayer`;
            gtag.js is injected after the page has loaded (lazyOnload <Script>
            in <body>) and replays the queue in order. Consent defaults and a
            stored "all" choice (cookie-consent.tsx) therefore always precede
            `config`, so a returning visitor's first page view is granted. */}
        {gaId && (
          <script
            id="ga4-consent"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){window.dataLayer.push(arguments);};
                gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
                try {
                  if (localStorage.getItem('cf_cookie_consent') === 'all') {
                    gtag('consent', 'update', { analytics_storage: 'granted' });
                  }
                } catch (e) {}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        )}
      </head>
      <body>
        {children}
        <CookieConsentLoader
          copy={{
            id: getMessages("id").cookieConsent,
            en: getMessages("en").cookieConsent,
          }}
        />
        <UtmCapture />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Analytics />
        {gaId && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}

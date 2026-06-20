import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "CatalystForge terms of service — terms and conditions for using our website and services.",
  robots: "noindex, follow",
};

export default function TermsPageEn() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      <article className="section-container mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#1A1A2E]/70">
          Last updated: June 2026
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              By accessing and using the CatalystForge website
              (catalystforge.web.id), you agree to be bound by these terms of
              service. If you do not agree, please do not use this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">2. Service Description</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              CatalystForge provides software development services including
              company profiles, CRM, HRIS, POS, AI support, dashboards, and
              business operational systems. This site serves as a portfolio and
              initial contact point. Project scope, estimates, and contracts are
              negotiated separately for each engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">3. Intellectual Property</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              All content on this site — including text, design, logos, and demo
              code — is owned by CatalystForge and protected by copyright law.
              Demo products shown are capability illustrations and are not
              available for use without a written agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">4. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              The site and its content are provided &ldquo;as is&rdquo; without any
              warranty. CatalystForge shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from the
              use or inability to use this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">5. Third-Party Links</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              This site may contain links to third-party websites. We do not
              control and are not responsible for the content or privacy
              practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">6. Changes to Terms</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on this page. Continued
              use of the site after changes constitutes acceptance of the
              updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">7. Governing Law</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              These terms are governed by and construed in accordance with the
              laws of the Republic of Indonesia. Any disputes shall be resolved
              through the competent courts in Indonesia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">8. Contact</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              For questions about these terms, contact:
            </p>
            <p className="mt-2 font-semibold text-[#E8531A]">
              catalystforgetechnology@gmail.com
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

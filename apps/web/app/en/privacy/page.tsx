import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CatalystForge",
  description:
    "CatalystForge privacy policy — how we collect, use, and protect your data.",
  robots: "noindex, follow",
};

export default function PrivacyPageEn() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      <article className="section-container mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#1A1A2E]/70">
          Last updated: June 2026
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">1. Data We Collect</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              When you fill out the contact form on this site, we collect:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Full name</li>
              <li>Email address</li>
              <li>Your message or project needs</li>
            </ul>
            <p className="mt-2 leading-relaxed text-[#1A1A2E]/78">
              We do <strong>not</strong> collect sensitive data, payment
              information, or personally identifiable information beyond what is
              listed above.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">2. Purpose of Data Collection</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              The data you provide is used solely to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Respond to your inquiries or estimate requests</li>
              <li>Send relevant service information if you consent</li>
              <li>Improve our service quality</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">3. Cookies and Tracking</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              This site only uses essential cookies required for basic site
              functionality (such as language preferences). We do{" "}
              <strong>not</strong> use third-party tracking cookies for
              advertising unless you provide explicit consent through the cookie
              banner.
            </p>
            <p className="mt-2 leading-relaxed text-[#1A1A2E]/78">
              If we enable analytics services (such as Google Analytics) in the
              future, data will only be collected after you provide consent
              through an opt-in mechanism.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">4. Data Storage and Security</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Contact data is stored on our servers located on a VPS with
              restricted access. We implement technical and organizational
              security measures to protect data from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">5. Data Sharing with Third Parties</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              We do <strong>not</strong> sell, rent, or share your personal data
              with third parties for marketing purposes. Data may only be shared
              if required by applicable law or regulation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              Under Indonesia&apos;s Personal Data Protection Law (UU PDP), you have
              the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[#1A1A2E]/78">
              <li>Access your personal data we hold</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Object to data processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1B3A5C]">7. Contact</h2>
            <p className="mt-3 leading-relaxed text-[#1A1A2E]/78">
              For questions about this privacy policy or data-related requests,
              contact us at:
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

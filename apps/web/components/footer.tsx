import Image from "next/image";
import { LanguageSwitcher } from "@repo/ui/language-switcher";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/company";
import { type Locale, type Messages } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { ScrollParallax } from "./scroll-parallax";

type FooterProps = {
  messages: Messages;
  locale: Locale;
  /** Where the language switcher goes on pages that exist in every language. */
  alternateHrefs?: Partial<Record<Locale, string>>;
};

export function Footer({ messages, locale, alternateHrefs }: FooterProps) {
  // Absolute paths so the links also work on pages other than the homepage.
  const prefix = locale === "en" ? "/en" : "";
  const navItems = [
    { href: `${prefix}/#about`, label: messages.navbar.about },
    { href: `${prefix}/about`, label: messages.navbar.team },
    { href: `${prefix}/#products`, label: messages.navbar.products },
    { href: `${prefix}/#process`, label: messages.navbar.howWeWork },
    { href: `${prefix}/portfolio`, label: messages.navbar.portfolio },
    { href: `${prefix}/#contact`, label: messages.navbar.contact },
  ];

  return (
    <footer className="overflow-hidden bg-[#1B3A5C] text-white">
      <div className="section-container grid gap-8 py-10 sm:gap-10 sm:py-12 lg:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <ScrollParallax direction="up" maxOffset={30}>
          <Reveal direction="left">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white sm:h-14 sm:w-14">
                <Image
                  alt={messages.brand.logoAlt}
                  className="object-cover"
                  fill
                  sizes="56px"
                  src="/logo-icon.png"
                />
              </span>
              <div>
                <p className="text-xl font-bold tracking-tight sm:text-2xl">
                  {messages.brand.name}
                </p>
                <p
                  className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-white/65 sm:text-base sm:tracking-[0.14em]"
                  lang="en"
                >
                  {messages.brand.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/75">
              {messages.metadata.description}
            </p>
          </Reveal>
        </ScrollParallax>

        <ScrollParallax direction="up" maxOffset={34}>
          <Reveal delay={100} direction="up">
            <nav aria-label={messages.footer.navLabel}>
              <ul className="grid content-start gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block text-base font-semibold text-white/80 transition hover:text-[#F58A60]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </ScrollParallax>

        <ScrollParallax direction="up" maxOffset={38}>
          <Reveal delay={160} direction="right">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                {messages.footer.contactTitle}
              </h2>
              <ul className="mt-5 grid gap-3 text-base leading-relaxed text-white/80">
                <li>
                  <a
                    className="flex min-w-0 items-center gap-3 transition hover:text-[#F58A60]"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    <Mail className="h-5 w-5 shrink-0" />
                    <span className="min-w-0 break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex min-w-0 items-center gap-3 transition hover:text-[#F58A60]"
                    href={`tel:${messages.footer.contactPhone.replace(/[\s-]/g, "")}`}
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    <span>{messages.footer.contactPhone}</span>
                  </a>
                </li>
                <li>
                  <a
                    aria-label={messages.footer.linkedinLabel}
                    className="flex min-w-0 items-center gap-3 transition hover:text-[#F58A60]"
                    href={LINKEDIN_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin aria-hidden="true" className="h-5 w-5 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="flex min-w-0 items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>{messages.footer.contactAddress}</span>
                </li>
              </ul>
              <LanguageSwitcher
                ariaLabel={messages.language.label}
                className="mt-6"
                currentLocale={locale}
                locales={[
                  {
                    ariaLabel: `${messages.language.id} - ${messages.language.idName}`,
                    code: "id",
                    href: alternateHrefs?.id ?? "/",
                    label: messages.language.id,
                    lang: "id",
                  },
                  {
                    ariaLabel: `${messages.language.en} - ${messages.language.enName}`,
                    code: "en",
                    href: alternateHrefs?.en ?? "/en",
                    label: messages.language.en,
                    lang: "en",
                  },
                ]}
              />
            </div>
          </Reveal>
        </ScrollParallax>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* The copyright line is English in both dictionaries. */}
          <p className="text-base leading-relaxed text-white/70" lang="en">
            {messages.footer.copyright}
          </p>
          <div className="flex gap-4 sm:pr-16">
            <a
              className="inline-flex min-h-6 items-center text-sm font-semibold text-white/60 transition hover:text-white"
              href={locale === "en" ? "/en/privacy" : "/privacy"}
            >
              {messages.footer.privacy}
            </a>
            <a
              className="inline-flex min-h-6 items-center text-sm font-semibold text-white/60 transition hover:text-white"
              href={locale === "en" ? "/en/terms" : "/terms"}
            >
              {messages.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

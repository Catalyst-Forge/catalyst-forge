import Image from "next/image";
import { LanguageSwitcher } from "@repo/ui/language-switcher";
import { type Locale, type Messages } from "@/lib/i18n";
import { MobileMenu } from "./mobile-menu";

type NavbarProps = {
  messages: Messages;
  locale: Locale;
  /** Where the language switcher goes on pages that exist in every language. */
  alternateHrefs?: Partial<Record<Locale, string>>;
};

export function Navbar({ messages, locale, alternateHrefs }: NavbarProps) {
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
    <>
      {/* focus-visible: keyboard users get it, focus the browser restores on its own does not. */}
      <a
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[10000] focus-visible:rounded-full focus-visible:bg-[#1B3A5C] focus-visible:px-5 focus-visible:py-3 focus-visible:text-base focus-visible:font-bold focus-visible:text-white focus-visible:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3A5C]"
        href="#main-content"
      >
        {messages.navbar.skipToContent}
      </a>
      <header className="relative sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="section-container flex min-h-14 items-center justify-between gap-2 px-3 sm:min-h-20 sm:gap-5 sm:px-6 lg:px-8">
          <a
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
            href={prefix || "/"}
          >
            <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-md sm:h-12 sm:w-12">
              <Image
                alt={messages.brand.logoAlt}
                className="object-cover"
                fill
                priority
                sizes="48px"
                src="/logo-icon.png"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[1.05rem] font-bold tracking-tight text-[#1B3A5C] min-[390px]:text-lg sm:text-2xl">
                {messages.brand.name}
              </span>
              <span
                className="hidden text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A2E]/70 xl:block"
                lang="en"
              >
                {messages.brand.tagline}
              </span>
            </span>
          </a>

          <nav
            aria-label={messages.navbar.navLabel}
            className="hidden items-center lg:flex"
          >
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="nav-link block text-base font-semibold text-[#1A1A2E] transition-colors hover:text-[#C4430D]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <LanguageSwitcher
              ariaLabel={messages.language.label}
              className="shrink-0 p-0.5 [&_a]:px-2 [&_a]:py-1.5 [&_a]:text-xs sm:p-1 sm:[&_a]:px-3 sm:[&_a]:text-sm"
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
            <a
              className="hidden rounded-full bg-[#D0490F] px-5 py-3 text-base font-bold text-white shadow-md transition hover:bg-[#B83D0B] xl:inline-flex"
              href={`${prefix}/#contact`}
            >
              {messages.navbar.cta}
            </a>
            <MobileMenu
              ctaHref={`${prefix}/#contact`}
              ctaLabel={messages.navbar.cta}
              items={navItems}
              menuLabel={messages.navbar.menuLabel}
              navLabel={messages.navbar.navLabel}
            />
          </div>
        </div>
      </header>
    </>
  );
}

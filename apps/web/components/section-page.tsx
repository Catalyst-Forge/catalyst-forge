import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { type Locale, type Messages } from "@/lib/i18n";

type SectionPageProps = {
  children: React.ReactNode;
  eyebrow: string;
  locale: Locale;
  messages: Messages;
  title: string;
};

export function SectionPage({
  children,
  eyebrow,
  locale,
  messages,
  title,
}: SectionPageProps) {
  return (
    <>
      <Navbar locale={locale} messages={messages} />
      <main
        className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E] outline-none"
        id="main-content"
        tabIndex={-1}
      >
        <section className="section-container py-14 sm:py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C4430D]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mt-10">{children}</div>
        </section>
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}

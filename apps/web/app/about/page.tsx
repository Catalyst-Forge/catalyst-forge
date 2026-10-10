import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DEFAULT_LOCALE, getMessages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/page-metadata";

const messages = getMessages(DEFAULT_LOCALE);

export const metadata: Metadata = createPageMetadata({
  title: messages.aboutPage.metadata.title,
  description: messages.aboutPage.metadata.description,
  locale: DEFAULT_LOCALE,
  path: "/about",
  languages: { id: "/about", en: "/en/about" },
});

export default function About() {
  return (
    <>
      <Navbar messages={messages} locale={DEFAULT_LOCALE} />
      <AboutPage messages={messages} />
      <Footer messages={messages} locale={DEFAULT_LOCALE} />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getMessages } from "@/lib/i18n";

const locale = "en" as const;
const messages = getMessages(locale);

export const metadata: Metadata = {
  title: messages.aboutPage.metadata.title,
  description: messages.aboutPage.metadata.description,
};

export default function AboutEn() {
  return (
    <>
      <Navbar messages={messages} locale={locale} />
      <AboutPage messages={messages} />
      <Footer messages={messages} locale={locale} />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/page-metadata";
import { PortfolioPage } from "@/app/components/portfolio-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

const alternateHrefs = { id: "/portfolio", en: "/en/portfolio" };

export const metadata: Metadata = createPageMetadata({
  title: "Project Portfolio",
  description:
    "CatalystForge project showcase — from enterprise systems & research to healthcare solutions.",
  locale: "en",
  path: "/en/portfolio",
  languages: { id: "/portfolio", en: "/en/portfolio" },
});

export default function PortfolioEnPage() {
  const messages = getMessages("en");

  return (
    <>
      <Navbar alternateHrefs={alternateHrefs} messages={messages} locale="en" />
      <PortfolioPage messages={messages} locale="en" />
      <Footer alternateHrefs={alternateHrefs} messages={messages} locale="en" />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

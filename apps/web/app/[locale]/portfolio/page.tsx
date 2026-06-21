import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { PortfolioPage } from "@/app/components/portfolio-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Project Portfolio | CatalystForge",
  description:
    "CatalystForge project showcase — from enterprise systems & research to healthcare solutions.",
};

export default function PortfolioEnPage() {
  const messages = getMessages("en");

  return (
    <>
      <Navbar messages={messages} locale="en" />
      <PortfolioPage messages={messages} locale="en" />
      <Footer messages={messages} locale="en" />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

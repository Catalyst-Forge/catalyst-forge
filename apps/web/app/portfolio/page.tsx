import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { PortfolioPage } from "@/app/components/portfolio-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: "Project Portfolio | CatalystForge",
  description:
    "Kumpulan project CatalystForge — dari sistem enterprise, riset, hingga solusi healthcare.",
};

export default function PortfolioIdPage() {
  const messages = getMessages("id");

  return (
    <>
      <Navbar messages={messages} locale="id" />
      <PortfolioPage messages={messages} locale="id" />
      <Footer messages={messages} locale="id" />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

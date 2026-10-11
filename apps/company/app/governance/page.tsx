import type { Metadata } from "next";
import {
  Footer,
  Governance,
  Navbar,
  PageHero,
} from "../../components/site";

export const metadata: Metadata = {
  title: "Tata Kelola",
  alternates: { canonical: "/governance" },
};

export default function GovernancePage() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <PageHero
        description="Legalitas lahan, standar mutu dan K3, serta pelaporan berkala yang menjadi dasar kepercayaan mitra."
        eyebrow="Tata Kelola"
        title="Proses yang rapi, diaudit, dan dilaporkan ke pemangku kepentingan."
      />
      <Governance />
      <Footer />
    </main>
  );
}

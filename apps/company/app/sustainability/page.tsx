import type { Metadata } from "next";
import {
  Footer,
  Navbar,
  PageHero,
  Sustainability,
} from "../../components/site";

export const metadata: Metadata = {
  title: "Keberlanjutan",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <PageHero
        description="Program konservasi, sirkularitas limbah pabrik, dan pengelolaan air yang dilaporkan secara terbuka."
        eyebrow="Keberlanjutan"
        title="Pertumbuhan yang menjaga hutan, air, dan masyarakat sekitar."
      />
      <Sustainability />
      <Footer />
    </main>
  );
}

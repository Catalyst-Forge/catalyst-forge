import type { Metadata } from "next";
import {
  Contact,
  Footer,
  Navbar,
  PageHero,
} from "../../components/site";

export const metadata: Metadata = {
  title: "Kontak",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <PageHero
        description="Tim kami menjawab pertanyaan pengadaan, kemitraan petani, dan kunjungan lapangan pada hari kerja."
        eyebrow="Kontak"
        title="Mari bicarakan kebutuhan pasokan atau kemitraan Anda."
      />
      <Contact />
      <Footer />
    </main>
  );
}

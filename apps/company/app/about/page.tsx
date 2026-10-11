import type { Metadata } from "next";
import {
  About,
  Footer,
  Navbar,
  PageHero,
  Testimonials,
} from "../../components/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <PageHero
        description="Profil, sejarah, dan nilai yang membentuk cara PT Sawit Lestari Nusantara bekerja bersama petani mitra dan pembeli industri."
        eyebrow="Tentang Perusahaan"
        title="Mengelola kebun dan pabrik sawit dengan standar yang bisa dipertanggungjawabkan."
      />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import {
  Footer,
  Navbar,
  Operations,
  PageHero,
} from "../../components/site";

export const metadata: Metadata = {
  title: "Operasi",
  alternates: { canonical: "/operations" },
};

export default function OperationsPage() {
  return (
    <main className="relative bg-[#f8f4e9]">
      <Navbar />
      <PageHero
        description="Kebun inti dan plasma, pengolahan CPO dan kernel, serta logistik TBS yang dipantau setiap hari."
        eyebrow="Operasi"
        title="Dari kebun sampai distribusi, dalam satu rantai yang terlacak."
      />
      <Operations />
      <Footer />
    </main>
  );
}

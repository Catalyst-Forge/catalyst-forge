import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { DEFAULT_LOCALE, getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  const messages = getMessages(DEFAULT_LOCALE);

  return (
    <>
      <Navbar messages={messages} locale={DEFAULT_LOCALE} />
      <main className="flex min-h-[70vh] items-center justify-center bg-[#FAF8F5] px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1B3A5C]">404</h1>
          <p className="mt-3 text-lg text-[#1A1A2E]/60">
            Halaman tidak ditemukan.
            <span className="mt-1 block text-base">Page not found.</span>
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D0490F] px-6 py-3 text-base font-bold text-white transition hover:bg-[#F4784A]"
            href="/"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </main>
      <Footer messages={messages} locale={DEFAULT_LOCALE} />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

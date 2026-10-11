"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locales";

// Kept out of messages/*.json on purpose: this boundary's chunk loads on every
// page, and importing the dictionaries here would ship both of them with it.
const copy: Record<Locale, { message: string; retry: string }> = {
  id: { message: "Terjadi kesalahan pada halaman ini.", retry: "Coba Lagi" },
  en: { message: "Something went wrong on this page.", retry: "Try Again" },
};

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAF8F5] p-6">
      {/* Without this a screen reader user only meets an unexplained button. */}
      <p className="sr-only" role="alert">
        {copy[locale].message}
      </p>
      <button
        className="rounded-full bg-[#D0490F] px-6 py-3 text-base font-bold text-white transition hover:bg-[#B83D0B]"
        type="button"
        onClick={reset}
      >
        {copy[locale].retry}
      </button>
    </main>
  );
}

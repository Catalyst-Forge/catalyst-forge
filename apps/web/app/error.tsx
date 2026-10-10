"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locales";

// Kept out of messages/*.json on purpose: this boundary's chunk loads on every
// page, and importing the dictionaries here would ship both of them with it.
const retryLabel: Record<Locale, string> = {
  id: "Coba Lagi",
  en: "Try Again",
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
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5] p-6">
      <button
        className="rounded-full bg-[#D0490F] px-6 py-3 text-base font-bold text-white"
        type="button"
        onClick={reset}
      >
        {retryLabel[locale]}
      </button>
    </div>
  );
}

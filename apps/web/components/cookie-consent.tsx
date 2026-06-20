"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "all" | "essential" | null;

const STORAGE_KEY = "cf_cookie_consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "all" || stored === "essential") {
      setChoice(stored);
    }
    // 2s delay ensures hero section paints first → true LCP element
    const timer = setTimeout(() => setMounted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = (value: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);

    // Notify Analytics component (same-tab consent change)
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: STORAGE_KEY,
        newValue: value,
      }),
    );
  };

  // Hide until client-side mount to prevent LCP pollution
  if (!mounted) {
    return null;
  }

  if (choice !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-200 bg-white/95 shadow-2xl backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-4">
        <div className="min-w-0 text-sm leading-relaxed text-[#1A1A2E]/78">
          <span className="font-bold text-[#1B3A5C]">
            Situs ini menggunakan cookie.
          </span>{" "}
          Kami hanya menggunakan cookie esensial untuk fungsi dasar situs.
          Dengan mengklik &ldquo;Terima Semua&rdquo;, Anda juga menyetujui
          cookie analitik opsional di masa mendatang.{" "}
          <Link
            href="/privacy"
            className="whitespace-nowrap font-semibold text-[#E8531A] underline transition hover:text-[#1B3A5C]"
          >
            Kebijakan Privasi
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => handleAccept("essential")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[#1A1A2E] transition hover:bg-[#FAF8F5]"
          >
            Hanya Esensial
          </button>
          <button
            type="button"
            onClick={() => handleAccept("all")}
            className="rounded-full bg-[#D0490F] px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#E8531A]"
          >
            Terima Semua
          </button>
        </div>
      </div>
    </div>
  );
}

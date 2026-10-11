"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  ctaLabel: string;
  ctaHref: string;
  items: Array<{
    href: string;
    label: string;
  }>;
  /** Accessible name of the toggle button (the state is exposed by aria-expanded). */
  menuLabel: string;
  /** Accessible name of the navigation landmark inside the panel. */
  navLabel: string;
};

export function MobileMenu({
  ctaLabel,
  ctaHref,
  items,
  menuLabel,
  navLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Escape closes the menu and hands focus back to the toggle; pressing or
    // tabbing outside it closes it without stealing focus.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    const closeWhenOutside = (event: Event) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("focusin", closeWhenOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("focusin", closeWhenOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden" ref={containerRef}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={menuLabel}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#1B3A5C] sm:h-11 sm:w-11"
        onClick={() => setIsOpen((value) => !value)}
        ref={buttonRef}
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className="absolute left-4 right-4 top-[calc(100%+8px)] max-h-[calc(100dvh-5.5rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 shadow-xl sm:left-6 sm:right-6 sm:p-4"
        hidden={!isOpen}
        id={panelId}
      >
        <nav aria-label={navLabel}>
          <ul className="grid gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-md px-4 py-3 text-base font-semibold text-[#1A1A2E] hover:bg-[#FAF8F5] hover:text-[#C4430D]"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="mt-2 block rounded-full bg-[#D0490F] px-4 py-3 text-center text-base font-bold text-white hover:bg-[#B83D0B]"
                href={ctaHref}
                onClick={() => setIsOpen(false)}
              >
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

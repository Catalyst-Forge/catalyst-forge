"use client";

import { useState, type ReactNode } from "react";
import { ContactPersonModal } from "@repo/ui/contact-person-modal";

export function HrisActionButton({
  children,
  className = "inline-flex h-10 items-center gap-2 rounded-lg bg-brand-500 px-4 text-sm font-bold text-white",
  featureName,
}: {
  children: ReactNode;
  className?: string;
  featureName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setOpen(true)} type="button">
        {children}
      </button>
      <ContactPersonModal
        appName="HRIS System"
        featureName={featureName}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
}

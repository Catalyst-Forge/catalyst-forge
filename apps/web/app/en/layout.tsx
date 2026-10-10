import type { ReactNode } from "react";
import { HtmlLang } from "@/components/html-lang";

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}

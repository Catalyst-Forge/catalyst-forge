import type { ReactNode } from "react";
import { cn } from "@repo/ui/lib/utils";

type BrowserBarProps = {
  host: string;
  size?: "sm" | "md";
  className?: string;
  /** Extra content at the right end, such as a hint. */
  children?: ReactNode;
};

const DOT_COLOURS = ["bg-[#D0490F]", "bg-[#F4B350]", "bg-[#3BAA72]"];

/** Window dots and address pill drawn above a product screenshot. */
export function BrowserBar({
  host,
  size = "md",
  className,
  children,
}: BrowserBarProps) {
  const small = size === "sm";

  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-slate-200 bg-[#F4F5F7] px-4",
        small ? "py-2.5" : "py-3",
        className,
      )}
    >
      <div aria-hidden="true" className="flex items-center gap-1.5">
        {DOT_COLOURS.map((colour) => (
          <span
            className={cn("rounded-full", small ? "h-2 w-2" : "h-2.5 w-2.5", colour)}
            key={colour}
          />
        ))}
      </div>
      <span
        className={cn(
          "flex-1 truncate rounded-md bg-white px-3 text-center text-xs font-medium text-slate-500",
          small ? "py-0.5" : "py-1",
        )}
      >
        {host}
      </span>
      {children}
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import {
  BarChart3,
  BookOpen,
  Bot,
  MessageSquareText,
  MessagesSquare,
  Settings,
} from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

const NAV = [
  { href: "/", label: "Live chat", icon: MessageSquareText },
  { href: "/conversations", label: "Conversations", icon: MessagesSquare },
  { href: "/knowledge", label: "Knowledge", icon: BookOpen },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

type HubShellProps = {
  active: (typeof NAV)[number]["href"];
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

/** Header, navigation and page title shared by the hub's back-office pages. */
export function HubShell({
  active,
  eyebrow,
  title,
  description,
  children,
}: HubShellProps) {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
          <Link className="flex shrink-0 items-center gap-2.5" href="/">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 shadow-lg">
              <Bot className="h-4 w-4 text-white" />
            </span>
            <span className="hidden text-sm font-bold text-white sm:inline">
              AI Agent Hub
            </span>
          </Link>
          <nav aria-label="Hub" className="flex flex-1 gap-1 overflow-x-auto">
            {NAV.map(({ href, label, icon: Icon }) => {
              const current = href === active;

              return (
                <Link
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition",
                    current
                      ? "bg-indigo-500/15 text-white"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white",
                  )}
                  href={href}
                  key={href}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-40 pt-8 md:px-6 md:pb-44">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-400">{description}</p>
        <div className="mt-6">{children}</div>
      </main>
    </div>
  );
}

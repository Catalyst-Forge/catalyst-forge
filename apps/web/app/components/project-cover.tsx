import {
  BarChart3,
  Bot,
  FlaskConical,
  HeartPulse,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  Enterprise: BarChart3,
  Research: FlaskConical,
  Healthcare: HeartPulse,
  AI: Bot,
};

/** Branded cover for projects that have no screenshot (client work under NDA). */
export function ProjectCover({
  category,
  client,
  size = "card",
}: {
  category: string;
  client: string;
  size?: "card" | "large";
}) {
  const Icon = categoryIcons[category] ?? LayoutGrid;
  const large = size === "large";

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#1B3A5C] to-[#0F2440] text-white">
      <div aria-hidden="true" className="circuit-pattern absolute inset-0" />
      <div
        className={`relative flex h-full flex-col justify-between ${
          large ? "p-8 sm:p-10" : "p-5"
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 ${
            large ? "h-16 w-16" : "h-11 w-11"
          }`}
        >
          <Icon
            aria-hidden="true"
            className={`text-[#F4B350] ${large ? "h-8 w-8" : "h-5 w-5"}`}
          />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
            {category}
          </p>
          {/* Cards already print the client right under the cover. */}
          {large ? (
            <p className="mt-1 text-2xl font-bold leading-snug sm:text-3xl">
              {client}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

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
      {large ? (
        <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
          <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <Icon aria-hidden="true" className="h-8 w-8 text-[#F4B350]" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              {category}
            </p>
            <p className="mt-1 text-2xl font-bold leading-snug sm:text-3xl">
              {client}
            </p>
          </div>
        </div>
      ) : (
        // Cards print the category and client right under the cover, so the
        // small variant is the icon alone.
        <div className="relative flex h-full items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition duration-500 group-hover:scale-110">
            <Icon aria-hidden="true" className="h-8 w-8 text-[#F4B350]" />
          </span>
        </div>
      )}
    </div>
  );
}

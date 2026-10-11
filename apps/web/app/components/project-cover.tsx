import {
  BarChart3,
  Bot,
  FlaskConical,
  HeartPulse,
  LayoutGrid,
  Lock,
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
  ndaNote,
  size = "card",
}: {
  category: string;
  client: string;
  /** Explains why there is no screenshot; shown in full on the large cover. */
  ndaNote: string;
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              {category}
            </p>
            <p className="mt-1 text-2xl font-bold leading-snug sm:text-3xl">
              {client}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <Lock aria-hidden="true" className="h-4 w-4 shrink-0" />
              {ndaNote}
            </p>
          </div>
        </div>
      ) : (
        // Cards print the category and client right under the cover, so the
        // small variant is the icon alone.
        <div className="relative flex h-full items-center justify-center">
          <span
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/75 ring-1 ring-white/15"
            title={ndaNote}
          >
            <Lock aria-hidden="true" className="h-3 w-3" />
            NDA
            <span className="sr-only">{ndaNote}</span>
          </span>
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition duration-500 group-hover:scale-110">
            <Icon aria-hidden="true" className="h-8 w-8 text-[#F4B350]" />
          </span>
        </div>
      )}
    </div>
  );
}

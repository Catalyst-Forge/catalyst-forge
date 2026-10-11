import { type Messages } from "@/lib/i18n";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

type TrustBarProps = {
  messages: Messages;
};

export function TrustBar({ messages }: TrustBarProps) {
  const t = messages.trustBar;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="section-container grid gap-8 py-9 sm:py-11 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:items-center lg:gap-12">
        <Reveal direction="up">
          <dl className="grid grid-cols-2 gap-6 lg:border-r lg:border-slate-200 lg:pr-12">
            {t.stats.map((stat) => (
              <div className="flex flex-col-reverse gap-1" key={stat.label}>
                <dt className="text-sm leading-snug text-[#1A1A2E]/65">
                  {stat.label}
                </dt>
                <dd className="font-heading text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} direction="up">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A1A2E]/50">
            {t.clientsLabel}
          </p>
          <ul className="mt-4 grid gap-5 sm:grid-cols-3 sm:gap-8">
            {t.clients.map((client) => (
              <li className="min-w-0" key={client.name}>
                <p className="text-base font-bold leading-snug tracking-tight text-[#1B3A5C] sm:text-lg">
                  {client.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#D0490F]/80">
                  {client.sector}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

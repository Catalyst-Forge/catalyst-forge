import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Messages } from "@/lib/i18n";
import { getTeamMembers } from "@/lib/team";
import { Reveal } from "./reveal";
import { ScrollParallax } from "./scroll-parallax";

type AboutCompanyProps = {
  messages: Messages;
};

export function AboutCompany({ messages }: AboutCompanyProps) {
  const members = getTeamMembers(messages);
  const photoAlt = messages.aboutPage.team.photoAlt;

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
        <ScrollParallax
          className="max-w-3xl scroll-mt-40"
          id="about"
          maxOffset={34}
        >
          <Reveal direction="left">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
              {messages.about.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
              {messages.about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A2E]/75 sm:mt-6 sm:text-lg">
              {messages.about.description}
            </p>

            <ul className="mt-7 grid gap-4 sm:mt-8">
              {messages.about.highlights.map((highlight) => (
                <li className="flex gap-3" key={highlight}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#E8531A]" />
                  <p className="text-base leading-relaxed text-[#1A1A2E]/80">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D0490F] px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-[#B83D0B] hover:scale-[1.02] active:scale-[0.98] sm:px-7 sm:py-4"
              href="/about"
            >
              {messages.about.teamCta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </ScrollParallax>

        {/* Real faces instead of abstract values: clients want to know who they work with. */}
        <ScrollParallax direction="up" maxOffset={30}>
          <Reveal direction="right">
            <div className="rounded-2xl border border-slate-200 bg-[#FAF8F5] p-4 shadow-sm sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#1B3A5C]/70">
                {messages.about.teamTitle}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
                {members.map((member) => (
                  <li
                    className="flex flex-col items-center rounded-xl bg-white px-3 py-5 text-center shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-5"
                    key={member.name}
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#1B3A5C] ring-4 ring-[#FFF4EF] sm:h-24 sm:w-24">
                      <Image
                        alt={photoAlt.replace("{name}", member.name)}
                        className="object-cover object-top"
                        fill
                        sizes="96px"
                        src={member.photo}
                      />
                    </div>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1B3A5C] sm:text-base">
                      {member.name}
                    </p>
                    <p className="mt-1.5 text-xs font-bold uppercase leading-snug tracking-[0.12em] text-[#C4430D]">
                      {member.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </ScrollParallax>
      </div>
    </section>
  );
}

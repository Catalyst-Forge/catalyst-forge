import type { Messages } from "@/lib/i18n";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";

export function AboutPage({ messages }: { messages: Messages }) {
  const a = messages.aboutPage;
  const skillsBagas = a.team.bagas.skills as string[];
  const skillsAlana = a.team.alana.skills as string[];
  const skillsHambali = a.team.hambali.skills as string[];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      {/* Hero Section */}
      <section className="section-container section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-bold uppercase tracking-[0.16em] text-[#D0490F]">
            About
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1B3A5C] sm:text-5xl lg:text-6xl">
            {a.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1A1A2E]/80">
            {a.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container pb-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
          {a.team.headline}
        </h2>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-3">
          <MemberCard
            name={a.team.bagas.name}
            role={a.team.bagas.role}
            bio={a.team.bagas.bio}
            skills={skillsBagas}
            photo="/team/bagas.jpg"
            priority
          />
          <MemberCard
            name={a.team.alana.name}
            role={a.team.alana.role}
            bio={a.team.alana.bio}
            skills={skillsAlana}
            photo="/team/alana.jpg"
          />
          <MemberCard
            name={a.team.hambali.name}
            role={a.team.hambali.role}
            bio={a.team.hambali.bio}
            skills={skillsHambali}
            photo="/team/hambali.jpg"
          />
        </div>
      </section>

      {/* CTA */}
      <CtaSection messages={messages} />
    </main>
  );
}

function MemberCard({
  name,
  role,
  bio,
  skills,
  photo,
  priority = false,
}: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photo: string;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D0490F]/30 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1B3A5C]">
        <Image
          alt={`Foto ${name}`}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 1023px) 100vw, 33vw"
          src={photo}
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-[#1B3A5C]">
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#D0490F]">
            {role}
          </p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-[#1A1A2E]/78">
          {bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#D0490F]/20 bg-[#FFF4EF] px-3 py-1 text-xs font-semibold text-[#D0490F]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

import type { Messages } from "@/lib/i18n";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";

export function AboutPage({ messages }: { messages: Messages }) {
  const a = messages.aboutPage;

  const members = [
    { ...a.team.bagas, photo: "/team/bagas-avatar.jpg" },
    { ...a.team.alana },
    { ...a.team.hambali, photo: "/team/hambali-avatar.jpg" },
    { ...a.team.faiz, photo: "/team/faiz-avatar.jpg" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1A2E]">
      {/* Hero Section */}
      <section className="section-container section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-bold uppercase tracking-[0.16em] text-[#D0490F]">
            {a.hero.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1B3A5C] sm:text-5xl lg:text-6xl">
            {a.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#1A1A2E]/80">
            {a.hero.subheadline}
          </p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {a.hero.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col-reverse items-center gap-1 bg-white px-6 py-6 text-center"
            >
              <dt className="text-sm leading-snug text-[#1A1A2E]/70">
                {stat.label}
              </dt>
              <dd className="font-heading text-3xl font-extrabold tracking-tight text-[#1B3A5C]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Team Section */}
      <section className="section-container pb-20 sm:pb-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B3A5C] sm:text-4xl">
            {a.team.headline}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#D0490F]"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2">
          {members.map((member, index) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              skills={member.skills as string[]}
              photo={"photo" in member ? member.photo : undefined}
              photoAlt={a.team.photoAlt.replace("{name}", member.name)}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection messages={messages} />
    </main>
  );
}

function getInitials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MemberCard({
  name,
  role,
  bio,
  skills,
  photo,
  photoAlt,
  priority = false,
}: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photo?: string;
  photoAlt: string;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D0490F]/30 hover:shadow-xl sm:p-8">
      <div className="flex items-center gap-5">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#1B3A5C] ring-4 ring-[#FFF4EF] sm:h-28 sm:w-28">
          {photo ? (
            <Image
              alt={photoAlt}
              className="object-cover object-top"
              fill
              priority={priority}
              sizes="112px"
              src={photo}
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center text-3xl font-extrabold tracking-wide text-[#F4784A]"
            >
              {getInitials(name)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-snug tracking-tight text-[#1B3A5C] sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#D0490F]">
            {role}
          </p>
        </div>
      </div>

      {bio.length <= 120 ? (
        <blockquote className="flex-1 border-l-4 border-[#D0490F] pl-4 text-lg font-medium italic leading-relaxed text-[#1B3A5C]">
          &ldquo;{bio}&rdquo;
        </blockquote>
      ) : (
        <p className="flex-1 text-base leading-relaxed text-[#1A1A2E]/80">
          {bio}
        </p>
      )}

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-[#D0490F]/20 bg-[#FFF4EF] px-3 py-1 text-xs font-semibold text-[#D0490F]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

import { type Messages } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { ScrollParallax } from "./scroll-parallax";

type HowWeWorkProps = {
  messages: Messages;
};

export function HowWeWork({ messages }: HowWeWorkProps) {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="section-container">
        <ScrollParallax
          className="mx-auto max-w-3xl scroll-mt-40 text-center"
          id="process"
          maxOffset={38}
        >
          <Reveal direction="up">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#C4430D]">
              {messages.howWeWork.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B3A5C] sm:text-3xl md:text-5xl">
              {messages.howWeWork.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A2E]/75 sm:mt-6 sm:text-lg">
              {messages.howWeWork.description}
            </p>
          </Reveal>
        </ScrollParallax>

        <div className="relative mt-10 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t-2 border-dotted border-[#E8531A]/35 lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {messages.howWeWork.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal
                  className="h-full"
                  delay={index * 110}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <article className="relative h-full text-center">
                    <div
                      aria-hidden="true"
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D0490F] text-xl font-bold tracking-tight text-white shadow-lg transition duration-300 hover:scale-105 sm:h-[72px] sm:w-[72px] sm:text-2xl"
                    >
                      {index + 1}
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1B3A5C] sm:mt-6 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#1A1A2E]/75">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

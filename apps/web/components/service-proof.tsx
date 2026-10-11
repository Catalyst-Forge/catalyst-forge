import Image from "next/image";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { getPortfolioPath } from "@/lib/locale-paths";
import {
  type PortfolioProject,
  type ServiceSlug,
  type ServiceUiCopy,
} from "@/lib/service-pages";
import { ConversionLink } from "./conversion-link";

type ServiceProofCardProps = {
  locale: Locale;
  project: PortfolioProject;
  service: ServiceSlug;
  ui: ServiceUiCopy;
};

/** One portfolio entry that backs a service, linked to its case study. */
export function ServiceProofCard({
  locale,
  project,
  service,
  ui,
}: ServiceProofCardProps) {
  const kind =
    project.kind === "client" ? ui.projectKindClient : ui.projectKindProduct;

  return (
    <article className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-lg backdrop-blur">
      {project.image ? (
        <Image
          alt={project.title}
          className="h-auto w-full border-b border-white/15"
          height={720}
          sizes="(min-width: 1024px) 620px, 100vw"
          src={project.image}
          width={1280}
        />
      ) : null}

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold uppercase tracking-[0.14em] text-[#FFB79C]">
          <span>{kind}</span>
          {project.year ? (
            <span className="text-white/60">{project.year}</span>
          ) : null}
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        {project.kind === "client" ? (
          <p className="mt-1 text-base font-semibold text-white/80">
            {project.client}
            {project.sector ? `, ${project.sector}` : ""}
          </p>
        ) : null}
        <p className="mt-4 text-base leading-relaxed text-white/78">
          {project.summary}
        </p>

        <ul className="mt-5 grid gap-2">
          {project.metrics.map((metric) => (
            <li className="flex gap-2" key={metric}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB79C]" />
              <span className="text-sm font-semibold leading-6 text-white/86">
                {metric}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            aria-label={`${ui.viewCaseStudy}: ${project.title}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#D0490F] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#F4784A]"
            href={getPortfolioPath(locale, project.slug)}
          >
            {ui.viewCaseStudy}
            <ArrowRight className="h-4 w-4" />
          </a>
          {project.demoUrl ? (
            <ConversionLink
              aria-label={`${ui.tryDemo}: ${project.title}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
              eventLabel={`service_proof_demo_${service}`}
              eventName="demo_click"
              href={project.demoUrl}
              rel="noreferrer"
              target="_blank"
            >
              {ui.tryDemo}
              <ExternalLink className="h-4 w-4" />
            </ConversionLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}

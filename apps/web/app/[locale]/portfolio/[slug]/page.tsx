import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/page-metadata";
import { getPortfolioProjectPaths } from "@/lib/portfolio-paths";
import { ProjectDetailPage } from "@/app/components/project-detail-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

type Params = { slug: string; locale: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return getMessages("en").portfolioPage.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const messages = getMessages("en");
  const project = messages.portfolioPage.projects.find(
    (p) => p.slug === slug,
  );

  if (!project) return { title: "404 | CatalystForge" };

  return createPageMetadata({
    title: `${project.title} — ${project.client} | Portfolio`,
    description: project.summary,
    locale: "en",
    path: `/en/portfolio/${slug}`,
    languages: getPortfolioProjectPaths("en", slug),
  });
}

export default async function ProjectDetailEnPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const messages = getMessages("en");
  const project = messages.portfolioPage.projects.find(
    (p) => p.slug === slug,
  );

  if (!project) notFound();

  return (
    <>
      <Navbar messages={messages} locale="en" />
      <ProjectDetailPage
        locale="en"
        messages={messages}
        slug={slug}
      />
      <Footer messages={messages} locale="en" />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/page-metadata";
import { ProjectDetailPage } from "@/app/components/project-detail-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

type Params = { slug: string; locale: string };

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
    languages: { id: `/portfolio/${slug}`, en: `/en/portfolio/${slug}` },
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

  return (
    <>
      <Navbar messages={messages} locale="en" />
      <ProjectDetailPage
        locale="en"
        messages={messages}
        notFound={!project}
        slug={slug}
      />
      <Footer messages={messages} locale="en" />
      <FloatingWhatsapp messages={messages} />
    </>
  );
}

import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderProjectOgImage } from "@/lib/og-pages";

export const alt = "CatalystForge portfolio case study";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return renderProjectOgImage("en", slug);
}

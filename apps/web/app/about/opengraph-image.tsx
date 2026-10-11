import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderAboutOgImage } from "@/lib/og-pages";

export const alt = "Tim CatalystForge";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderAboutOgImage("id");
}

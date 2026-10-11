import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderAboutOgImage } from "@/lib/og-pages";

export const alt = "The CatalystForge team";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderAboutOgImage("en");
}

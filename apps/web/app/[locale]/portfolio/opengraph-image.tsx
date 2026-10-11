import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderPortfolioOgImage } from "@/lib/og-pages";

export const alt = "CatalystForge project portfolio";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderPortfolioOgImage("en");
}

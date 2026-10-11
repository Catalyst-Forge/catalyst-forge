import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderHomeOgImage } from "@/lib/og-pages";

export const alt =
  "CatalystForge - website, operational systems, and AI automation for Indonesian businesses";
export const contentType = ogImageContentType;
export const size = ogImageSize;

export default function OpenGraphImage() {
  return renderHomeOgImage("id");
}

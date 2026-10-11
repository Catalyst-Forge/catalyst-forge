import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderServiceOgImage } from "@/lib/og-pages";
import { getServicePage } from "@/lib/service-pages";

export const alt = getServicePage("id", "custom-pos").metaTitle;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderServiceOgImage("id", "custom-pos");
}

import { ogImageContentType, ogImageSize } from "@/lib/og-image";
import { renderServiceOgImage } from "@/lib/og-pages";
import { getServicePage } from "@/lib/service-pages";

export const alt = getServicePage("en", "custom-crm").metaTitle;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return renderServiceOgImage("en", "custom-crm");
}

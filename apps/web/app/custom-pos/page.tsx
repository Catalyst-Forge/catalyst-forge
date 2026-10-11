import { ServiceLandingPage } from "@/components/service-landing-page";
import { DEFAULT_LOCALE, getMessages } from "@/lib/i18n";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

export const metadata = createServicePageMetadata(DEFAULT_LOCALE, "custom-pos");

export default function CustomPosPage() {
  return (
    <ServiceLandingPage
      locale={DEFAULT_LOCALE}
      messages={getMessages(DEFAULT_LOCALE)}
      slug="custom-pos"
    />
  );
}

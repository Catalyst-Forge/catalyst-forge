import { ServiceLandingPage } from "@/components/service-landing-page";
import { getMessages } from "@/lib/i18n";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

const locale = "en" as const;

export const metadata = createServicePageMetadata(locale, "custom-pos");

export default function CustomPosEnPage() {
  return (
    <ServiceLandingPage
      locale={locale}
      messages={getMessages(locale)}
      slug="custom-pos"
    />
  );
}

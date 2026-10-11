import { ServiceLandingPage } from "@/components/service-landing-page";
import { getMessages } from "@/lib/i18n";
import { createServicePageMetadata } from "@/lib/service-page-metadata";

const locale = "en" as const;

export const metadata = createServicePageMetadata(locale, "ai-support");

export default function AiSupportEnPage() {
  return (
    <ServiceLandingPage
      locale={locale}
      messages={getMessages(locale)}
      slug="ai-support"
    />
  );
}

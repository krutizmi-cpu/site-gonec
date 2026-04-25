import { LegalPageTemplate } from "@/components/page-builder";
import { legalPages } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Согласие на обработку персональных данных | Гонецъ",
  description: legalPages.consent.description,
  path: "/personal-data-consent",
});

export default function PersonalDataConsentPage() {
  return (
    <LegalPageTemplate
      title={legalPages.consent.title}
      description={legalPages.consent.description}
      sections={legalPages.consent.sections}
    />
  );
}

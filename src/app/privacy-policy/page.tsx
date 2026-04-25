import { LegalPageTemplate } from "@/components/page-builder";
import { legalPages } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Политика конфиденциальности | Гонецъ",
  description: legalPages.privacy.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title={legalPages.privacy.title}
      description={legalPages.privacy.description}
      sections={legalPages.privacy.sections}
    />
  );
}

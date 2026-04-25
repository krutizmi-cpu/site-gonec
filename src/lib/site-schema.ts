import type { FaqItem } from "@/lib/site-data";

type OrganizationSchemaInput = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: string;
  taxId: string;
};

export function buildOrganizationSchema(input: OrganizationSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CourierService",
    name: input.name,
    legalName: input.legalName,
    description: input.description,
    url: input.url,
    telephone: input.phone,
    email: input.email,
    taxID: input.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.address,
      addressLocality: "Москва",
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "City",
      name: "Москва",
    },
  };
}

export function buildFaqSchema(title: string, items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: title,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

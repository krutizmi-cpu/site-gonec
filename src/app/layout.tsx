import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { companyInfo, contactChannels, defaultMetadata, siteUrl } from "@/lib/site-data";
import { buildOrganizationSchema } from "@/lib/site-schema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  applicationName: companyInfo.shortName,
  icons: {
    icon: [{ url: "/brand/cdek-favicon.ico", type: "image/x-icon" }],
    shortcut: "/brand/cdek-favicon.ico",
    apple: "/brand/cdek-apple-touch-icon.png",
  },
  keywords: [
    "СДЭК Москва",
    "пункт выдачи СДЭК Москва",
    "курьерская доставка Москва",
    "доставка для интернет-магазина Москва",
    "доставка на маркетплейсы Москва",
    "фулфилмент Москва",
    "международная доставка Москва",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: companyInfo.shortName,
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMetadata.title,
    description: defaultMetadata.description,
  },
  category: "logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema({
    name: companyInfo.fullName,
    legalName: companyInfo.legalName,
    description: defaultMetadata.description,
    url: siteUrl,
    email: contactChannels.email.value,
    phone: contactChannels.phone.value,
    address: companyInfo.address,
    taxId: companyInfo.inn,
  });

  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <main className="flex min-h-[calc(100vh-5rem)] flex-col">{children}</main>
        <SiteFooter />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}

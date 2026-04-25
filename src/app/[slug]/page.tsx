import { notFound } from "next/navigation";
import { MarketingPageTemplate } from "@/components/page-builder";
import { marketingPages } from "@/lib/site-data";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(marketingPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = marketingPages[slug];

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = marketingPages[slug];

  if (!page) {
    notFound();
  }

  return <MarketingPageTemplate page={page} />;
}

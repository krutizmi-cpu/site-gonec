import type { MetadataRoute } from "next";
import { allStaticRoutes, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allStaticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contacts" || route === "/calculate" ? 0.9 : 0.8,
  }));
}

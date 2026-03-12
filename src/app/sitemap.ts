import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/fonctionnalites",
    "/pour-qui",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/fonctionnalites" ? 0.9 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const featureSubPages = [
    "/fonctionnalites/suivi-cultures",
    "/fonctionnalites/tracabilite-lots",
    "/fonctionnalites/gestion-recoltes",
    "/fonctionnalites/gestion-stock-ferme",
    "/fonctionnalites/transformation-pam",
  ];

  const routes = [
    "",
    "/fonctionnalites",
    ...featureSubPages,
    "/fonctionnalites-a-venir",
    "/pour-qui",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === ""
      ? 1
      : route === "/fonctionnalites"
        ? 0.9
        : featureSubPages.includes(route)
          ? 0.85
          : 0.7,
  }));
}

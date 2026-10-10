import type { MetadataRoute } from "next";
import { getAllPortfolioProjectPaths } from "@/lib/portfolio-paths";
import { serviceSlugs } from "@/lib/service-pages";

const siteUrl = "https://catalystforge.web.id";
const lastModified = new Date();

// /products, /process, /testimonials and /contact only redirect to sections
// of the homepage, so they are intentionally left out.
const routes = [
  { path: "", priority: 1 },
  { path: "/en", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/en/about", priority: 0.6 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/en/portfolio", priority: 0.7 },
  ...getAllPortfolioProjectPaths().map((path) => ({
    path,
    priority: path.startsWith("/en/") ? 0.5 : 0.6,
  })),
  ...serviceSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: 0.85,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    changeFrequency: "weekly",
    lastModified,
    priority: route.priority,
    url: `${siteUrl}${route.path}`,
  }));
}

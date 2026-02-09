import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";

const routes = [
  "",
  "/services",
  "/industries",
  "/case-studies",
  "/pricing",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://shieldify-ip.example";
  const posts = await getAllPosts();

  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}

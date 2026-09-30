import type { MetadataRoute } from "next";
import { getAllWork, getAllPosts } from "@/lib/mdx";

const BASE_URL = "https://your-domain.com"; // ← change this

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0 },
    { url: `${BASE_URL}/services`, priority: 0.9 },
    { url: `${BASE_URL}/work`, priority: 0.9 },
    { url: `${BASE_URL}/about`, priority: 0.7 },
    { url: `${BASE_URL}/blog`, priority: 0.8 },
    { url: `${BASE_URL}/contact`, priority: 0.8 },
  ];

  const work = getAllWork().map((w) => ({
    url: `${BASE_URL}/work/${w.slug}`,
    priority: 0.7,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticPages, ...work, ...posts].map((p) => ({
    ...p,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));
}
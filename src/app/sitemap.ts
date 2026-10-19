import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/config/business";
import { getAllServiceSlugs } from "@/data/services";
import { getAllLocationSlugs } from "@/data/locations";
import { getAllBlogPostSlugs } from "@/data/blog";
import { getAllAuthorSlugs } from "@/data/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.domain;
  const serviceSlugs = getAllServiceSlugs();
  const locationSlugs = getAllLocationSlugs();
  const blogSlugs = getAllBlogPostSlugs();
  const authorSlugs = getAllAuthorSlugs();

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: "2026-10-19",
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/service-areas/${slug}/`,
    lastModified: "2026-10-19",
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: "2026-10-19",
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const authorRoutes: MetadataRoute.Sitemap = authorSlugs.map((slug) => ({
    url: `${baseUrl}/authors/${slug}/`,
    lastModified: "2026-10-19",
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/how-it-works/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/editorial-policy/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap/`,
      lastModified: "2026-10-19",
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-use/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/accessibility/`,
      lastModified: "2026-10-19",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
    ...authorRoutes,
  ];
}

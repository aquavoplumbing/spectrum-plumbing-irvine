import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/search/"],
    },
    sitemap: `${BUSINESS_INFO.domain}/sitemap.xml`,
  };
}

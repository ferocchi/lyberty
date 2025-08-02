import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.WEBSITE_URL || "https://lyberty.ai";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/admin/",
        "/playground/",
        "/auth/",
        "/api/",
        "/protected/",
        "/edit/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

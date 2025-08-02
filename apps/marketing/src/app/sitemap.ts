import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

// Recursively find all page.tsx files
function findPages(dir: string, basePath: string = ""): string[] {
  const pages: string[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      pages.push(...findPages(fullPath, join(basePath, item)));
    } else if (item === "page.tsx") {
      pages.push(join(basePath, item));
    }
  }

  return pages;
}

// Filter and process pages like the original implementation
function processPage(page: string): string | null {
  // Skip specific paths
  if (/(playground|auth|api|protected|edit)/.test(page)) {
    return null;
  }

  // Remove 'app' and 'page.tsx', then clean up parenthetical segments
  const pathname = page
    .replace("app", "")
    .replace("/page.tsx", "")
    .replace(/\([^)]*\)/g, "") // Removes anything between parentheses
    .replace(/\/+/g, "/"); // Removes multiple slashes and keeps one

  return pathname;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.WEBSITE_URL || "https://lyberty.ai";

  // Get all page paths in the app router
  const pages = findPages("src/app");
  const processedPages = pages.map(processPage).filter(Boolean) as string[];

  // Convert to sitemap format
  const sitemapEntries: MetadataRoute.Sitemap = processedPages.map(
    (pathname) => ({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: pathname === "" ? 1 : 0.8,
    })
  );

  // TODO: Add dynamic routes from database
  // Example for integrations:
  // const integrations = await db.select().from(platforms);
  // const integrationUrls = integrations.map((integration) => ({
  //   url: `${baseUrl}/integrations/${integration.slug}`,
  //   lastModified: integration.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));
  // sitemapEntries.push(...integrationUrls);

  return sitemapEntries;
}

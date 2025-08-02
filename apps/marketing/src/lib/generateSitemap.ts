import { writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

async function generateSitemap() {
  const pages: string[] = [];

  // Recursively find all page.tsx files
  function findPages(dir: string, basePath: string = "") {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        findPages(fullPath, join(basePath, item));
      } else if (item === "page.tsx") {
        pages.push(join(basePath, item));
      }
    }
  }

  findPages("src/app");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page
      .replace("src/app", "")
      .replace(".tsx", "")
      .replace("/page", "");
    const route = path === "/index" ? "" : path;
    return `  <url>
    <loc>https://lyberty.com${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();

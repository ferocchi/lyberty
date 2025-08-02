# Marketing App

This is the marketing website for Lyberty, built with Next.js 15+.

## Environment Variables

Create a `.env.local` file in this directory with the following variables:

```env
# Website URL for sitemap and robots.txt
WEBSITE_URL=https://lyberty.ai

# Add other environment variables as needed
# DATABASE_URL=your_database_url_here
# API_KEY=your_api_key_here
```

## Features

- **Modern Next.js 15+**: Uses the latest Next.js features
- **SEO Optimized**: Automatic sitemap and robots.txt generation
- **Performance**: Partial Prerendering and React Compiler enabled
- **Type Safety**: Full TypeScript support with typed routes

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Sitemap

The sitemap is automatically generated at build time and includes:

- All static pages in the app directory
- Filters out protected routes (playground, auth, api, protected, edit)
- Supports dynamic routes from database (commented example included)
- Uses environment variable for base URL

## Robots.txt

Automatically generated robots.txt that:

- Allows all crawlers
- Disallows protected routes
- References the sitemap

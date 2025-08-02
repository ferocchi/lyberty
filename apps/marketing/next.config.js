/** @type {import('next').NextConfig} */
const nextConfig = {
  // Marketing site: Full Next.js features for SEO and edge capabilities
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable edge middleware and server components
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;

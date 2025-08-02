import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marketing site: Full Next.js features for SEO and edge capabilities
  images: {
    // Enable modern image formats for better compression
    formats: ["image/webp", "image/avif"],
    // Optimized device sizes for marketing content
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Optimized image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable remote patterns if you're using external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Modern Next.js 15+ optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimize bundle size
  optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
  // Enable typed routes for better type safety
  typedRoutes: true,
};

export default nextConfig;

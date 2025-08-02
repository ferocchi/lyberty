import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Main web app: Static export for Tauri desktop/iOS wrapping
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimize for static export
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;

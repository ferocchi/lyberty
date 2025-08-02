/** @type {import('next').NextConfig} */
const nextConfig = {
  // Main web app: Static export for Tauri desktop/iOS wrapping
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;

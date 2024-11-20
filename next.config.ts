import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

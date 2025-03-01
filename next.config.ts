import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["res.cloudinary.com"],
    formats: ["image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;

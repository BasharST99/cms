// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "8055", pathname: "/assets/**" },
      { protocol: "https", hostname: "realestate.directus.app", port: "", pathname: "/assets/**" },
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/photo-**" },
      { protocol: "https", hostname: "images.pexels.com", port: "", pathname: "/photos/**" },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minotar.net",
        port: "",
        pathname: "/cube/**/100.png",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**"
      }
    ],
  },
};

export default nextConfig;

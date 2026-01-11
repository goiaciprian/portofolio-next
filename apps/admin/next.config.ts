import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rt1kh4ljapvlmkvo.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  cacheComponents: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;

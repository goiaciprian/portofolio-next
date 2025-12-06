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
    ],
  },
  cacheComponents: true,
};

export default nextConfig;

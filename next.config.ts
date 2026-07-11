import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Service/product images are hosted externally (client-provided links),
    // so any https host is allowed rather than an allowlist per provider.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;

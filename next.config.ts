import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/first-pass-e",
  images: { unoptimized: true },
};

export default nextConfig;

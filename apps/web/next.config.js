const path = require("path");
const { headers } = require("../../next-security-headers.cjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname, "../../"),
  experimental: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  transpilePackages: ["@repo/ui", "@repo/config"],
  headers,
};

module.exports = nextConfig;

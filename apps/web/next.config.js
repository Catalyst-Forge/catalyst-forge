const path = require("path");
const { headers } = require("../../next-security-headers.cjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname, "../../"),
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
  async headers() {
    return [
      ...(await headers()),
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

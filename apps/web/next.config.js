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
  // Old standalone pages that now live as sections of the homepage.
  async redirects() {
    const sections = {
      products: "products",
      process: "process",
      testimonials: "projects",
      contact: "contact",
    };

    return [
      ...Object.entries(sections).flatMap(([path, section]) => [
        { source: `/${path}`, destination: `/#${section}`, permanent: true },
        {
          source: `/en/${path}`,
          destination: `/en#${section}`,
          permanent: true,
        },
      ]),
      // Indonesian is served without a prefix.
      { source: "/id", destination: "/", permanent: true },
      { source: "/id/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

module.exports = nextConfig;

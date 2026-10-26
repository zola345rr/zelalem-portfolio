import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Re-evaluated on sync (2026-10-26): the Projects page now shows six
  // descriptive project areas, but the /projects/[slug] case-study route
  // still has no static params (no full case studies exist yet), so Cache
  // Components still cannot be enabled for that route. Re-enable only
  // once real case studies are added with generateStaticParams.
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

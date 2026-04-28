import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/personal-cv" : "",
  },
  images: {
    unoptimized: isGitHubPages,
  },
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: "/personal-cv",
        assetPrefix: "/personal-cv/",
      }
    : {}),
};

export default nextConfig;

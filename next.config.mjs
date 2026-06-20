import { existsSync } from "node:fs";

/** @type {import('next').NextConfig} */

// Repo name drives the GitHub Pages project subpath (https://<user>.github.io/<repo>/).
// Derived from the Actions env so a fork with a different name works automatically;
// falls back to "wedflix" for local builds.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "wedflix";

// A CNAME file means the site is served from a custom domain at the root, so no
// basePath is needed. Without one, assume a GitHub Pages project subpath.
// => Fork + add `public/CNAME` with your domain and the basePath turns off on its own.
const hasCustomDomain = existsSync("./public/CNAME") || existsSync("./CNAME");
const useBasePath = !hasCustomDomain;

const nextConfig = {
  output: "export",
  basePath: useBasePath ? `/${repo}` : "",
  assetPrefix: useBasePath ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

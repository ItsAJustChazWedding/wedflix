/** @type {import('next').NextConfig} */
const repo = "wedflix";

// basePath is needed ONLY when the site is served from a subpath, i.e.
// https://<user>.github.io/wedflix/ (GitHub Pages project site, no custom domain).
// Set this to false when serving from a custom domain or a <user>.github.io root.
const useBasePath = true;

const nextConfig = {
  output: "export",
  basePath: useBasePath ? `/${repo}` : "",
  assetPrefix: useBasePath ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

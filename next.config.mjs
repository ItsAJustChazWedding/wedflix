/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "wedflix";

const nextConfig = {
  output: "export",
  // Served from https://<user>.github.io/wedflix/ on GitHub Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

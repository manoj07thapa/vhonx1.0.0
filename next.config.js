/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // basePath: "/vhonx1.0.0",
  // assetPrefix: "/vhonx1.0.0",
};

module.exports = nextConfig;

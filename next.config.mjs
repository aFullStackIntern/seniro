/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "saniiro.sgp1.cdn.digitaloceanspaces.com",
      "picsum.photos",
      "saniiro.sgp1.cdn.digitaloceanspaces.com",
    ],
  },
  // distDir: "build",
  // output: "export",
};

export default nextConfig;

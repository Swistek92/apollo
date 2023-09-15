/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.staticflickr.com",
      },
    ],
  },
};

module.exports = nextConfig;

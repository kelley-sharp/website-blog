/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "cloudinary",
  },
};

module.exports = nextConfig;

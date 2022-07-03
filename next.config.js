/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    extends: ['next', 'prettier']
  },
  images: {
    deviceSizes: [320, 540, 768, 1024, 1360, 1920, 2500],
    loader: "default",
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    extends: ['next', 'prettier']
  }
}

module.exports = nextConfig

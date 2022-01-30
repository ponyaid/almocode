/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'almocode.co',
      'admin.almocode.co',
    ]
  },

  reactStrictMode: true,
}

module.exports = nextConfig

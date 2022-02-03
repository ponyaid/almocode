/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')


const nextConfig = nextTranslate({
  images: {
    domains: [
      '127.0.0.1',
      'localhost',
      'almocode.co',
      'api.almocode.co',
      'admin.almocode.co',
    ]
  },

  reactStrictMode: true,
})

module.exports = nextConfig

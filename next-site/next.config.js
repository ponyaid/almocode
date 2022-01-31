/** @type {import('next').NextConfig} */
const nextConfig = {
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

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig

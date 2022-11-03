/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const path = require('path')
module.exports = {
  //basePath: '/front-end',
  images: {
    unoptimized: true,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  webpack: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
}

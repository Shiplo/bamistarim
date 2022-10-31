/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig

const path = require('path')
module.exports = {
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
  }
}

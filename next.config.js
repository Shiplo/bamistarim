/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/story": { page: "/story" },
      "/about": { page: "/about" },
      "/single": { page: "/single" }
    };
  }
};

const path = require('path')
module.exports = {
  images: {
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

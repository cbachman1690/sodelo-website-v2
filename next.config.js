/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? '/sodelo-website-v2' : '',
  assetPrefix: isGithubPages ? '/sodelo-website-v2/' : '',
}

module.exports = nextConfig

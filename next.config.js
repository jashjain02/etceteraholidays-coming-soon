/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove the basePath entirely for custom domain
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**',
      },
    ],
    // Disable next.js image optimization for all images on production for reducing costs with Vercel Plan
    unoptimized: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig

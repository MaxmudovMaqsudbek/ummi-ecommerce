/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  images: {
    domains: ['fakestoreapi.com', 'dummyimage.com'],
  },
  formats: ['image/avif', 'image/webp'], // Support for AVIF format
};

module.exports = nextConfig
// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['fakestoreapi.com'],
//   },
// };

// export default nextConfig;

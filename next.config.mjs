/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'], // Allow external images from ImageKit
  },
  // experimental: {
  //   scrollRestoration: true, // Enables browser scroll restoration for App Router
  // },
};

export default nextConfig;

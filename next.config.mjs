/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'], // Allow external images from ImageKit
  },
  trailingSlash: true, // supposed to go to top of page with link shit
  // experimental: {
  //   scrollRestoration: true, // Enables browser scroll restoration for App Router
  // },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['ik.imagekit.io'], // Add ImageKit's domain to the list
    },
    experimental: {
      scrollRestoration: true,
    }
  };
  
  export default nextConfig;
  
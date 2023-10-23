/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [''],
  },
};

module.exports ={
  ...nextConfig, // Include the Next.js configuration
  output: 'standalone', // Your additional configuration
};

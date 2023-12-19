/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['denzeludemba.com'],
    domains: ['6581f9c18fe8155bc295a0ba--magnificent-bubblegum-c1842c.netlify.app'],
    domains: ['denzeludemba.render.com'],
  },
  // rules: {
  //   "@next/next/no-img-element": "off",
  //  },
  
};

module.exports ={
  ...nextConfig, // Include the Next.js configuration
};

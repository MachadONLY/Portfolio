// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/Components/About/About.tsx',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  
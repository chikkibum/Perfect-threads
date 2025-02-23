/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    // add https://utfs.io/f/c969dd10-976c-417a-a3e4-edba3b3289d9-22w3q.png
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'utfs.io',
        },
    ],
  },
};

export default nextConfig;

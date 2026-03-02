/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // ESLint runs locally; skip during Amplify build to avoid linting compiled output
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

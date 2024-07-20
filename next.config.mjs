/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_ASSET_BASE_URL.replace(/https?:\/\//, "").replace(
        /\/$/,
        ""
      ),
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_ASSET_BASE_URL.replace(
          /https?:\/\//,
          ""
        ).replace(/\/$/, ""),
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_ASSET_BASE_URL.replace(
          /https?:\/\//,
          ""
        ).replace(/\/$/, ""),
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/wp-json/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}wp-json/:path*`,
      },
      {
        source: "/wp-content/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}wp-content/:path*`,
      },
    ];
  },
};

export default nextConfig;

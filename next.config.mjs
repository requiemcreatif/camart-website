/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-omeruta.com",
      },
      {
        protocol: "https",
        hostname: "www.api-omeruta.com",
      },
      {
        protocol: "https",
        hostname:
          (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "") || "api-omeruta.com",
      },
      {
        protocol: "https",
        hostname: "0.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "1.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "2.gravatar.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/wp-json/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "https://api-omeruta.com/"
        }wp-json/:path*`,
      },
      {
        source: "/wp-content/:path*",
        destination: `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "https://api-omeruta.com/"
        }wp-content/:path*`,
      },
    ];
  },
};

export default nextConfig;

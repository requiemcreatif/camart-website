/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["www.backend.camart.es", "backend.camart.es"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.backend.camart.es",
      },
      {
        protocol: "https",
        hostname: "backend.camart.es",
      },
      {
        protocol: "https",
        hostname:
          (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "")
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, "") || "backend.camart.es",
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
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/:path*`,
      },
      {
        source: "/wp-content/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-content/:path*`,
      },
      {
        source: "/api/artists",
        //destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/artists`,
        destination: `https://backend.camart.es/wp-json/camart/v1/artists`,
      },
      {
        source: "/api/artists/:id",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/artists/:id`,
      },
      {
        source: "/api/posts",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`,
      },
    ];
  },
};

export default nextConfig;

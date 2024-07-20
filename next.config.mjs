import { Domain } from "@mui/icons-material";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "www.api-omeruta.com"],
  },
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://www.api-omeruta.com/:path*",
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Menonaktifkan optimasi gambar
  },
};

export default nextConfig;

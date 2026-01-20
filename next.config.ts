import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure trailing slashes are handled correctly if needed, usually default is fine.
  // images: { unoptimized: true } // Uncomment if using static export or having image issues
};

export default nextConfig;

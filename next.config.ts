import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local SVG dashboard preview — skip raster optimization pipeline
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

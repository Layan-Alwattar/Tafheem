import type { NextConfig } from "next";

// Where the Tafheem platform (backend) runs. Requests to /api/* on this app are
// proxied there, so the browser stays same-origin and no CORS is needed.
const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:3000";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.56.1"],
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${BACKEND_URL}/api/:path*` }];
  },
};

export default nextConfig;

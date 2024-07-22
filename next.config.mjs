/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "/admin/:path*",
      },
      {
        source: "/staff/:path*",
        destination: "/staff/:path*",
      },
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("Rewrites called");
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ["avatar.iran.liara.run"],
  },
};

export default nextConfig;

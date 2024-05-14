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
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp3|wav|m4a)$/,

      use: {
        loader: "file-loader",

        options: {
          publicPath: "/_next/static/audio/",

          outputPath: "static/audio/",

          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;

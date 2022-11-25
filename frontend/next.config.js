/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/public",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_PATH: "http://localhost:8080/",
  },
};

module.exports = nextConfig;

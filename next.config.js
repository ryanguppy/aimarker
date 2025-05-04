/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEEPSEEK_KEY: "sk-e51a78a039d14226a4ad14f27bbfc8a2",
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 
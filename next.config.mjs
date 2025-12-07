import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const assetPrefix = process.env.ASSET_PREFIX ?? '';
const nextConfig = {
    // basePath,
    assetPrefix,
    images: {
      domains: ['sn6.nvidiastudiospace.com', 'nvidiastudiospace.com', 'www.nvidiastudiospace.com'],
    },
    async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',// CRITICAL: Enable range requests for video seeking
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' }
        ],
      },
      {
        source: '/_next/static/media/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' }
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name][ext]' },
    });
  return config;
  },
};

export default withNextIntl(nextConfig);

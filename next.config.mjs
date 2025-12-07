import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production' 
      ? 'https://ns6.nvidiastudiospace.com' 
      : undefined,
    
    images: {
      domains: ['ns6.nvidiastudiospace.com', 'nvidiastudiospace.com', 'www.nvidiastudiospace.com'],
    },
    
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
          ],
        },
        {
          source: '/videos/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
            {
              key: 'Accept-Ranges',
              value: 'bytes',
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
            { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/_next/static/media/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/static/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
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
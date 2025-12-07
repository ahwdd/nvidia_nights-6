import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
      domains: ['sn6.nvidiastudiospace.com', 'nvidiastudiospace.com', 'www.nvidiastudiospace.com'],
    },
    
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
            { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
            { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
            { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
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
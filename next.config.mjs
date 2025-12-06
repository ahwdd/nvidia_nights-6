import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

// const basePath = '/ns6';
const nextConfig = {
    // basePath,
    // assetPrefix: basePath,
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
    ];
  },

  webpack: (config, { isServer }) => { // Don't process video files through webpack
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
      },
    });

    return config;
  },
};

// const withVideo = require("next-video");

// export withVideo();

export default withNextIntl(nextConfig);

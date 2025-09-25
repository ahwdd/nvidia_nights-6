import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

// const withVideo = require("next-video");

// export withVideo();

export default withNextIntl(nextConfig);

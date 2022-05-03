/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
}
const withPWA  = require("next-pwa");
module.exports = withPWA(nextConfig)

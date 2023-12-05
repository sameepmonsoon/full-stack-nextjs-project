/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
const path = require("path");

module.exports = {
  ...nextConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

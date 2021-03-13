const { BannerPlugin } = require("webpack");
const { resolve } = require("path");

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/cli.js',
  target: 'node',
  output: {
    path: resolve(__dirname, 'dist/cli'),
    filename: 'cli.bundle.js',
  },
  plugins: [
    new BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ]
};

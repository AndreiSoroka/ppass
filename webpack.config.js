const ESLintPlugin = require('eslint-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/cli.mjs',
  target: 'node',
  output: {
    path: process.env.NODE_ENV === 'production'
      ? resolve(__dirname, 'dist/cli')
      : resolve(__dirname, 'dist/cli/dev'),
    filename: 'cli.bundle.js',
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.DefinePlugin({
      'process.env.APP_VERSION': `'${packageJson.version}'`,
    }),
  ],
};

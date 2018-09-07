/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const baseOutputDirectory = path.join(__dirname, 'build');
const srcOutputDirectory = path.join(baseOutputDirectory, 'src');

module.exports = (outputDir = srcOutputDirectory) => ({
  entry: './src/server/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  output: {
    path: outputDir,
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new webpack.DefinePlugin({
      __isWebpack__: true,
    }),
  ],
});

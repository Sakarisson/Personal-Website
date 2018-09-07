/* eslint-disable no-console */

require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const pug = require('pug');
const fs = require('fs');

const baseOutputDirectory = path.join(__dirname, 'build');
const srcOutputDirectory = path.join(baseOutputDirectory, 'src');
const htmlOutputDirectory = path.join(baseOutputDirectory, 'html');

module.exports = (env, argv) => {
  const __DEV__ = argv.mode === 'development';

  const plugins = [
    new CleanWebpackPlugin([srcOutputDirectory]),
    new WebpackAssetsManifest({
      publicPath: '/build/',
    }),
  ];

  if (__DEV__) {
    const renderHtml = pug.compileFile(path.join(__dirname, 'src', 'views', 'index.pug'));
    const html = renderHtml({ dev: true });
    if (!fs.existsSync(htmlOutputDirectory)) {
      fs.mkdirSync(htmlOutputDirectory);
    }
    fs.writeFileSync(path.join(htmlOutputDirectory, 'devHtml.html'), html);

    const htmlPlugin = new HtmlWebPackPlugin({
      template: path.join(htmlOutputDirectory, 'devHtml.html'),
      filename: './index.html',
    });

    plugins.push(htmlPlugin);
  }

  let devPort = process.env.DEV_SERVER_PORT;

  if (devPort == null) {
    devPort = 3000;
  }

  if (!fs.existsSync(baseOutputDirectory)) {
    fs.mkdirSync(baseOutputDirectory);
  }

  const clientConfig = {
    entry: './src/client/index.js',
    output: {
      path: srcOutputDirectory,
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      port: devPort,
      open: true,
      historyApiFallback: true,
    },
    plugins,
  };

  const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    output: {
      path: srcOutputDirectory,
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
  };

  return [clientConfig, serverConfig];
};

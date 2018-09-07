/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const pug = require('pug');
const fs = require('fs');

module.exports = (base, __DEV__) => {
  const srcOutputDirectory = path.join(base, 'src');
  const htmlOutputDirectory = path.join(base, 'html');

  const plugins = [
    new CleanWebpackPlugin([srcOutputDirectory]),
    new WebpackAssetsManifest({
      publicPath: '/build/',
    }),
  ];

  let devPort = process.env.DEV_SERVER_PORT;

  if (__DEV__) {
    const renderHtml = pug.compileFile(path.join(__dirname, '..', 'src', 'views', 'index.pug'));
    const html = renderHtml({ dev: true });
    if (!fs.existsSync(htmlOutputDirectory)) {
      fs.mkdirSync(htmlOutputDirectory);
    }
    fs.writeFileSync(path.join(htmlOutputDirectory, 'devHtml.html'), html);

    const htmlPlugin = new HtmlWebPackPlugin({
      template: path.join(htmlOutputDirectory, 'devHtml.html'),
      filename: './index.html',
    });

    if (devPort == null) {
      devPort = 3000;
    }

    plugins.push(htmlPlugin);
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

  return clientConfig;
};

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
const path = require('path');

const baseOutputDirectory = path.join(__dirname, 'build');
const srcOutputDirectory = path.join(baseOutputDirectory, 'src');

const serverConfig = require('./webpack/server.config');
const clientConfig = require('./webpack/client.config');

module.exports = (env, argv) => {
  const __DEV__ = argv.mode === 'development';

  return [clientConfig(baseOutputDirectory, __DEV__), serverConfig(srcOutputDirectory)];
};

import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../../client/Pages/Home';

let paths = null;
try {
  const manifestPath = path.join(global.__basedir, '..', 'build', 'src', 'manifest.json');
  paths = fs.readFileSync(manifestPath);
  paths = JSON.parse(paths.toString());
} catch (e) {
  // probably dev
}

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(global.__basedir, 'views'));

/**
 * Simple middleware to initialize initialData variable
 */
const initialDataMiddleware = async (req, res, next) => {
  const initialData = {};

  res.locals.initialData = initialData;
  next();
};

/**
 * The first request should trigger initialDataMiddleware
 */
app.get('*', initialDataMiddleware);

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const bundle = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  if (!paths) {
    return res.status(404).send('no');
  }
  return res.render('index', {
    bundleSrc: paths['main.js'],
    bundle,
    styleTags,
  });
});

module.exports = app;

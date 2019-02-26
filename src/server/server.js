require('babel-polyfill');
import Express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import configureStore from '../shared/store/configureStore';

import App from '../shared/containers';

const app = new Express();
const port = 3000;

app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

const counter = 0;
const preloadedState = { counter };
const store = configureStore(preloadedState);

const nodeStats = path.resolve(__dirname, '../node/loadable-stats.json');

const webStats = path.resolve(__dirname, '../web/loadable-stats.json');

const webExtractor = new ChunkExtractor({ statsFile: webStats })


app.get( '*', (req, res) => {

  const url = req.url;
  const context= {};

  const jsx = webExtractor.collectChunks(
      <Provider store={ store }>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
  );

  const html = renderToString( jsx );

  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
      <html>
        <head>
          <title>Universal Example</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}</script>
        ${webExtractor.getScriptTags()}
      </html>
    `);
});

app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`LISTENING ON PORT: ${port}.`)
  }
});

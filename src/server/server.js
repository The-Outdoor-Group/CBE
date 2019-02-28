import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import configureStore from '../shared/store/configureStore';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';

const app = new Express();
const port = 3000;

app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

const store = configureStore({});

const nodeStats = path.resolve(__dirname, '../node/loadable-stats.json');
const webStats = path.resolve(__dirname, '../web/loadable-stats.json');
const webExtractor = new ChunkExtractor({ statsFile: webStats });

const layout = (html, preloadedState, webExtractor) => (`
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


app.get( '*', (req, res) => {

  let context = {};

  let jsx = webExtractor.collectChunks(
      <Provider store={ store }>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
  );

  let html = renderToString( jsx );

  store.runSaga(rootSaga).toPromise()
    .then( () => {
      console.log('saga server complete');

      res.status(200).send(
        layout(
          html,
          JSON.stringify( store.getState() ),
          webExtractor
        )
      )
    }).catch( e => {
      console.log('Error occurred: ', e.message);
      res.status(500).send(e.message);
    });

    context = {};

     jsx = webExtractor.collectChunks(
        <Provider store={ store }>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
    );

    html = renderToString( jsx );

    layout(
      html,
      JSON.stringify( store.getState() ),
      webExtractor
    )

    store.close();

});


app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED.`)
  }
});

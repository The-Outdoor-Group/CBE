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

const getWebExtractor = () => {
  const webStats = path.resolve(__dirname, '../web/loadable-stats.json');
  return new ChunkExtractor({ statsFile: webStats });
};

const sendContent = (req) => (
  layout(
    createJsx( req ),
    JSON.stringify( store.getState() ),
    getWebExtractor()
  )
);

const createJsx = (req) => {
  let webExtractor = getWebExtractor();

  let context = {};

  let jsx = webExtractor.collectChunks(
    <Provider store={ store }>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return renderToString( jsx );
};


app.get( '*', (req, res) => {

  store.runSaga(rootSaga).toPromise()
    .then( () => res.status(200).send( sendContent(req) ) )
    .catch( e => res.status(500).send(e.message) );

    sendContent(req);

    store.close();

});


app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED.`)
  }
});

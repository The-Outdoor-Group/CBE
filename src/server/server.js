import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import serialize from 'serialize-javascript';
import configureStore from '../shared/store/configureStore';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';


const app = new Express();
const port = process.env.PORT || 3000;

app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

const store = configureStore({});

const layout = (html, preloadedState, webExtractor) => {
  const helmet = Helmet.renderStatic();

  return (
  `
    <!DOCTYPE html>
      <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.link.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
        <script>window.__PRELOADED_STATE__ = ${serialize(preloadedState).replace(/</g, '\\x3c')}</script>
        ${webExtractor.getScriptTags()}
      </html>
  `
  );
};

const getWebExtractor = () => {
  const webStats = path.resolve(__dirname, '../web/loadable-stats.json');
  return new ChunkExtractor({ statsFile: webStats });
};

const sendContent = (req) => {
  return layout(
    createJsx( req ),
    JSON.stringify( store.getState() ),
    getWebExtractor()
  );
};

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

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  return renderToString( jsx );
};


app.get( '*', (req, res) => {

  store.runSaga(rootSaga).toPromise()
    .then( () => res.status(200).send( sendContent(req) ) )
    .catch( e => res.status(500).send(e.message) );

    // sendContent(req);

    store.close();

});


app.listen(port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED on ${port}.`)
  }
});

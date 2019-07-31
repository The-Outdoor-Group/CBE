// import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import { Helmet } from 'react-helmet';
import configureStore from '../shared/store/configureStore';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';
import serialize from 'serialize-javascript';

const app = new Express();
const port = 3000;


app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

const store = configureStore({});

const renderHeader = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      <title>Fix with async helmet</title>
        <link rel="shortcut icon" href="https://s3.amazonaws.com/elite-website/images/favicon/favicon.ico"/>
      </head>
      <body>
      <div id="app">
  `;
};

const renderFooter = (loadableState, webExtractor) => {
  return `
    </div>
    </body>
    <script>window.__PRELOADED_STATE__ =${serialize((loadableState)).replace(/</g, '\\u003c')}</script>
    ${webExtractor.getScriptTags()}
    </html>
  `;
};

const getWebExtractor = () => {
  const webStats = path.resolve(__dirname, '../web/loadable-stats.json');
  return new ChunkExtractor({ statsFile: webStats });
};

const createNodeStream = (req) => {
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

  return renderToNodeStream( jsx );
};


app.use( async (req, res) => {

  let loadableState = {};

  store.runSaga(rootSaga).toPromise()
    .then( () => {

      const htmlStream = createNodeStream( req )

      res.set('Content-Type', 'text/html')
      res.status(200).write( renderHeader() );

      htmlStream.pipe( res, { end: false } );

      htmlStream.on('data', (data) => {
        console.log('data: ', data);
        console.log('store.getState: ', store.getState())
      });

      htmlStream.on('end', () => {
        loadableState = store.getState();
        res.write( renderFooter(loadableState, getWebExtractor()) );
        res.end();
        console.log('end occurred');
      });

    }).catch( e => res.status(500).send(e.message) );

    store.close();

});


app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED.`)
  }
});

import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import { Helmet } from 'react-helmet';
import configureStore from '../shared/store/configureStore';
// import configureStore from './store';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';
// import { renderHeader, renderFooter } from './render';
import serialize from 'serialize-javascript';

const app = new Express();
const port = 3000;


app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

app.get( '*', (req, res) => {

  const url = req.url;

  const store = configureStore();

  const context = {};

  const webStats = path.resolve(__dirname, '../web/loadable-stats.json');
  const webExtractor = new ChunkExtractor({ statsFile: webStats });

  const appWithRouter = (
    webExtractor.collectChunks(
     <Provider store={ store }>
       <StaticRouter location={url} context={context}>
         <App />
       </StaticRouter>
     </Provider>
   )
 );

  if (context.url) {
    console.log('context.url: ', context.url);
    res.redirect(context.url);
    return;
  }

  let loadableState = {};

  store.runSaga(rootSaga).toPromise()
    .then(() => {

      console.log('store.getState(): ', store.getState());
      const htmlStream = renderToNodeStream( appWithRouter );

      res.set('Content-Type', 'text/html')
      res.status(200).write(
        `
            <!DOCTYPE html>
            <html>
              <head>
              <title>Fix with async helmet</title>
                <link rel="shortcut icon" href="https://s3.amazonaws.com/elite-website/images/favicon/favicon.ico"/>
              </head>
              <body>
              <div id="app">
        `
      );

      htmlStream.pipe( res, { end: false } );

      htmlStream.on('data', (data) => {
        console.log(serialize(data));
      });

      htmlStream.on('end', () => {
        loadableState = store.getState();
        res.write(
          `
            </div>
            </body>
            <script>window.__PRELOADED_STATE__ =${serialize(renderState(loadableState)).replace(/</g, '\\u003c')}</script>
            ${webExtractor.getScriptTags()}
            </html>
          `
        );
        return res.end();
        console.log('end occurred');
      });

    })
    .catch( e => res.status(500).send(e.message) );

    // need some way to trigger the saga so the data comes back and then can send with initial payload
    // trigger a re-render // .replace(/</g, '\\u003c')
    const renderState = (loadableState) => loadableState;

    loadableState = renderState( store.getState() );
    store.close();

    // resend the response
});


app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED.`)
  }
});

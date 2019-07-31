// import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ChunkExtractor } from '@loadable/server';
import serialize from 'serialize-javascript';
import jsesc from 'jsesc';
import configureStore from '../shared/store/configureStore';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';


const app = new Express();
const port = process.env.PORT || 3000;

app.use( '/assets/node', Express.static('dist/node') );
app.use( '/assets/web', Express.static('dist/web') );

/*
  This works for SSR HTML and in store if i hard code data in - need to async put data into configStore()
  make a function to say once data has returned, pop in the data?

*/
// const store = configureStore();




app.get('*', async (req, res) => {

  const store = configureStore();

  const layout = (html, preloadedState) => {
    const helmet = Helmet.renderStatic();
    const extractor = getExtractor();
    const linkTags = extractor.getLinkTags();
    const scriptTags = extractor.getScriptTags();
    const styleTags = extractor.getStyleTags();
    // ${helmet.link.toString()}
    // ${helmet.meta.toString()}
    return (
    `
      <!DOCTYPE html>
        <html>
          <head>
            ${helmet.title.toString()}
            ${linkTags}
            ${styleTags}
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
          <script>window.__PRELOADED_STATE__ = ${jsesc(preloadedState)}</script>
          ${scriptTags}
        </html>
    `
    );
  };

  const getExtractor = () => {
    const statsFile = path.resolve(__dirname, '../web/loadable-stats.json');
    return new ChunkExtractor({ statsFile });
  };

  const sendContent = (req, store) => {

    return layout(
      createJsx( req, store ),
      JSON.stringify( store.getState() )
    );
  };

  const createJsx = (req, store) => {
    let extractor = getExtractor();

    let context = {};

    let jsx = extractor.collectChunks(
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

    store
      .runSaga(rootSaga)
      .toPromise()
      .then( () => {
        res.status(200).send( sendContent(req, store) );
      })
      .catch( e => res.status(500).send(e.message) );

    sendContent(req, store)
    store.close();

    // const promise1 = new Promise((resolve, reject) => {
    //   resolve( store.runSaga(rootSaga) ); //
    // });
    //    // .catch( e => res.status(500).send(e.message) );
    // // });
    //
    // Promise.all([promise1]).then( values => {
    //   console.log('values: ', values);
    //
    // });
    //
    // promise1.then( (result) => {
    //   console.log('resolved all promises: ', result);
    //   return result;
    // })
    // .then((result) => {
    //   console.log('store: ', store.getState());
    //   res.status(200).send( sendContent(req, store) );
    // })
    // .catch(e => console.log('err in promise: ', e) );

});

app.listen(port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED on ${port}.`)
  }
});

// import '@babel/polyfill';
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ssrPrepass from 'react-ssr-prepass';
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

  const sendContent = async (req, store) => {

    // createJsx(req, store).then(
    //   (result) => {
    //     return result;
    //   }
    // ).then(
    //   result => {
    //     console.log('result createJsx: ', result);
    //
    //     return layout(
    //       result,
    //       JSON.stringify( store.getState() )
    //     );
    //   }
    // ).catch(e => console.log('e: ', e));

    const result = await createJsx(req, store).catch(e => console.log('error in createJsx: ', e));
    return layout(
      result,
      JSON.stringify( store.getState() )
    )

    // return layout(
    //   createJsx( req, store ),
    //   JSON.stringify( store.getState() )
    // );
  };

  const createJsx = async (req, store) => {
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

    await ssrPrepass(jsx);

    return renderToString( jsx );
  };

    const f = async () => {
      store
      .runSaga(rootSaga)
      .toPromise()
      .then( () => {
        const result = sendContent(req, store);
        return result;
      })
      .then( result => {
       res.status(200).send(result)
      })
      .catch( e => res.status(500).send(e.message) );
    }

    f();

    await sendContent(req, store)
    store.close();

});

app.listen(port, (error) => {
  if (error) {
    console.error('error occurred: ', error);
  } else {
    console.info(`SERVER HAS STARTED on ${port}.`)
  }
});

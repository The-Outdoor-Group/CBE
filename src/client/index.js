import React from 'react';
import jsesc from 'jsesc';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import configureStore from '../shared/store/configureStore';
import rootSaga from '../shared/sagas/rootSaga';
import App from '../shared/containers';

delete window.__PRELOADED_STATE__;

const store = configureStore( jsesc(window.__PRELOADED_STATE__) );

store.runSaga(rootSaga);

loadableReady( () => {
  hydrate(
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
});

import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import configureStore from '../shared/store/configureStore';
import App from '../shared/containers';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const rootElement = document.getElementById('app');

loadableReady( () => {
  hydrate(
    <Provider store={ store }>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    rootElement
  );
});

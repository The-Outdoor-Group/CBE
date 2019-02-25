import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { loadableReady } from '@loadable/component';
import configureStore from '../shared/store/configureStore';
import App from '../shared/containers/App';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const rootElement = document.getElementById('app');

loadableReady( () => {
  hydrate(
    <Provider store={ store }>
      <App/>
    </Provider>,
    rootElement
  );
});

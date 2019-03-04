import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNav from './../components/MainNav';

import * as Routes from './../routes/routes';

const Fragment = React.Fragment;


const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('assets/web/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

class App extends Component {

  componentDidMount() {
    if (process.env.IS_BROWSER) registerSW();
  }

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>My Helmet Title from App</title>
        </Helmet>
        <MainNav />
        <main id="main-content">
          <Switch>
            <Route exact path='/' component={() => <Routes.HomePage />} />
            <Route path='/foo' component={() => <Routes.FooPage /> } />
            <Route path='/bar' component={() => <Routes.BarPage />} />
          </Switch>
        </main>
      </Fragment>
    );
  }
};

export default App

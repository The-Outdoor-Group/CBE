import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNav from './../components/MainNav';

import * as Routes from './../routes/routes';

const Fragment = React.Fragment;

const App = () => (
  <Fragment>
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

export default App

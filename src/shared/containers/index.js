import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import loadable from '@loadable/component'

import * as Routes from './../routes/routes';

import favIcon from './assets/images/favicon.ico';
import favIcon16 from './assets/images/favicon-16x16.png';
import favIcon32 from './assets/images/favicon-32x32.png';
import favIconApple from './assets/images/apple-touch-icon.png';
import favIconSafari from './assets/images/safari-pinned-tab.svg';

import './assets/css/global.css';

const MainNav = loadable( () => import('./../components/main-nav/MainNav') );
const MainSecondaryNav = loadable( () => import('../components/main-secondary-nav/MainSecondaryNav') );
const MoreContentArrow = loadable( () => import('../components/content/assets/images/MoreContentArrow') );

const App = (props) => {

  useEffect(() => {
    if (process.env.IS_BROWSER) {
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

      registerSW();
    }
  });

    return (
      <>
        <Helmet>
          <title>Custom Bow Equipment</title>
          <link rel="stylesheet" type="text/css" href="assets/web/styles.css" />
          <link rel="shortcut icon" href={favIcon} />
          <link rel="apple-touch-icon" sizes="180x180" href={favIconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
          <link rel="mask-icon" href={favIconSafari} color="#5bbad5" />
          <link rel="canonical" href="https://custombowequipment.com/" />
          <meta name="description" content="Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand." />
          <meta property="fb:app_id" content="711769165659880" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Archery Bow Hunting Sights, Target Sights, Stabilizers, &amp; Accessories" />
          <meta property="og:image" content="" />
          <meta property="og:image:secure_url" content="" />
          <meta property="og:description" content="Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand." />
          <meta property="og:url" content="https://custombowequipment.com/" />
          <meta property="og:site_name" content="Custom Bow Equipment" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Archery Bow Hunting Sights, Target Sights, Stabilizers, &amp; Accessories" />
          <meta name="twitter:description" content="Custom Bow Equipment offers innovative compound bow hunting sights, target sights and archery accessories giving precision archers the accuracy they demand." />
          <meta name="twitter:image" content="" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Helmet>

        <MainNav />

        <main id="main-content" className={props.secondaryMenuVisible ? 'fade' : null}>
          <Switch>
            <Route exact path="/" component={() => <Routes.HomePage />} />
            <Route path="/shop" component={() => <Routes.ShopPage /> } />
            <Route path="/product" component={() => <Routes.ProductPage />} />
            <Route path="/cart" component={() => <Routes.CartPage />} />
            <Route path="/wishlist" component={() => <Routes.WishlistPage />} />
          </Switch>
        </main>
        <MainSecondaryNav />
        <MoreContentArrow />
      </>
    );
};

const mapStateToProps = ({ sharedUiState }) => {
  const { secondaryMenuVisible } = sharedUiState;
  return { secondaryMenuVisible };
};

export default connect(mapStateToProps)(App);

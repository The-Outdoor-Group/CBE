import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'

import './assets/css/main-nav.css';

const Logo = loadable( () => import('./assets/images/logo') );
const SecondaryMenuIcon = loadable( () => import('./assets/images/secondary-menu-icon') );

/*
  will need to update the middle nav menu so that it shows pertinant navigation if customer
  is over a specific part of the page
*/

const MainNav = () => (
  <Fragment>
    <div id="main-nav-container">
      <Link id="home-link" to="/"><Logo /></Link>
      <nav>
        <ul>
          <li><Link to="/foo">Sights</Link></li>
          <li><Link to="/bar">Stabilizers</Link></li>
          <li><Link to="/bar">Quivers</Link></li>
          <li><Link to="/bar">Accessories</Link></li>
          <li><Link to="/bar">Financing</Link></li>
        </ul>
      </nav>
      <Link id="shop" to="/shop">Shop</Link>
    </div>
    <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon /></div>
  </Fragment>
);

export default MainNav;

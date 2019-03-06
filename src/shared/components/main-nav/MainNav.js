import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/logo';
import './assets/css/main-nav.css';

const MainNav = () => (
  <nav id="main-nav">
    <ul>
      <li><Logo /></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/foo">Foo</Link></li>
      <li><Link to="/bar">Bar</Link></li>
    </ul>
  </nav>
);

export default MainNav;

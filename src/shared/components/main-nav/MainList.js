import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import colorStyle from './assets/utilities/font-color-style';

// nav list when more info panel is not open

const MainList = (props) => {
  const { colorTheme } = props;

  return (
    <Fragment>
      <li><Link to="/foo" style={colorStyle(colorTheme)}>Sights</Link></li>
      <li><Link to="/bar" style={colorStyle(colorTheme)}>Stabilizers</Link></li>
      <li><Link to="/bar" style={colorStyle(colorTheme)}>Quivers</Link></li>
      <li><Link to="/bar" style={colorStyle(colorTheme)}>Arrow Rest</Link></li>
      <li><Link to="/product" style={colorStyle(colorTheme)}>Accessories</Link></li>
      <li><Link to="/shop" style={colorStyle(colorTheme)}>Shop</Link></li>
    </Fragment>
  );
};

export default MainList;

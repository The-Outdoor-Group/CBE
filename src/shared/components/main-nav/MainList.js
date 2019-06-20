import React from 'react';
import { Link } from 'react-router-dom';
import colorStyle from './assets/utilities/font-color-style';

// nav list when more info panel is not open

const MainList = (props) => {
  const { colorTheme, showAllLinks } = props;

  return (
    <>
      {
        showAllLinks ?
        (
          <>
            <li><Link to="/foo" style={colorStyle(colorTheme)}>Sights</Link></li>
            <li><Link to="/bar" style={colorStyle(colorTheme)}>Stabilizers</Link></li>
            <li><Link to="/bar" style={colorStyle(colorTheme)}>Quivers</Link></li>
            <li><Link to="/bar" style={colorStyle(colorTheme)}>Arrow Rest</Link></li>
            <li><Link to="/product" style={colorStyle(colorTheme)}>Accessories</Link></li>
            <li><Link to="/shop" style={colorStyle(colorTheme)}>Shop</Link></li>
          </>
        )
       : null
      }
      <li><Link id="shop" to="/cart" style={colorStyle(colorTheme)}>Cart</Link></li>
    </>
  );
};

export default MainList;

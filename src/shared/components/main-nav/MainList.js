import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import colorStyle from './assets/utilities/font-color-style';

const MainList = (props) => {
  const { colorTheme, showAllLinks } = props;

  const opacityStyle = () => props.secondaryMenuVisible ? 'fade' : null;

  const [color, setColor] = useState('dark');

  useEffect(() => {
    if (props.secondaryMenuVisible) {
        setColor('dark');
    } else {
      setColor(colorTheme);
    }
  });

  return (
    <>
      {
        showAllLinks ?
        (
          <>
            <li className={opacityStyle()}><Link to="/foo" style={colorStyle(colorTheme)}>Sights</Link></li>
            <li className={opacityStyle()}><Link to="/bar" style={colorStyle(colorTheme)}>Stabilizers</Link></li>
            <li className={opacityStyle()}><Link to="/bar" style={colorStyle(colorTheme)}>Quivers</Link></li>
            <li className={opacityStyle()}><Link to="/bar" style={colorStyle(colorTheme)}>Arrow Rest</Link></li>
            <li className={opacityStyle()}><Link to="/product" style={colorStyle(colorTheme)}>Accessories</Link></li>
            <li className={opacityStyle()}><Link to="/shop" style={colorStyle(colorTheme)}>Shop</Link></li>
          </>
        )
       : null
      }
      <li><Link id="shop" to="/cart" style={colorStyle(color)}>Cart</Link></li>
    </>
  );
};

const mapStateToProps = ({ sharedUiState }) => {
  const { secondaryMenuVisible } = sharedUiState;
  return { secondaryMenuVisible };
};

export default connect(mapStateToProps)(MainList);

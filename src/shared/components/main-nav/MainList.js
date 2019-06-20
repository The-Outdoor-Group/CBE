import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import colorStyle from './assets/utilities/font-color-style';
import { setMainUrl } from '../../actions/shared-ui-actions';

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

  const handleClick = () => {

  }

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
            <li className={opacityStyle()}><Link to="/product" onClick={() => props.setMainUrl('proudct')} style={colorStyle(colorTheme)}>Accessories</Link></li>
            <li className={opacityStyle()}><Link to="/shop" onClick={() => props.setMainUrl('shop')} style={colorStyle(colorTheme)}>Shop</Link></li>
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

export default connect(mapStateToProps, { setMainUrl })(MainList);

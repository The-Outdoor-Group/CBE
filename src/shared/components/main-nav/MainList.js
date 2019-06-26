import React, { useState, useEffect } from 'react';
import SharedMainList from './SharedMainList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStyle } from './assets/utilities/font-color-style';
import { setMainUrl } from '../../actions/shared-ui-actions';
import { createBrowserHistory } from 'history';

const MainList = (props) => {

  const { colorTheme, showAllLinks, mainUrl, secondaryMenuVisible } = props;

  const opacityStyle = () => secondaryMenuVisible ? 'fade' : null;

  const [color, setColor] = useState('dark');

  useEffect(() => {
    secondaryMenuVisible ? setColor('dark') : setColor(colorTheme);
  });


  useEffect(() => {
    if (process.env.IS_BROWSER) {
      const history = createBrowserHistory();
      // console.log('history.location.pathname: ', history.location.pathname);
      props.setMainUrl(history.location.pathname);
    }
  }, [props.mainUrl]);

  return (
    <>
      {
        showAllLinks ?
        (
          <SharedMainList opacityStyle={opacityStyle} setMainUrl={props.setMainUrl} getStyle={getStyle} colorTheme={props.colorTheme} mainUrl={props.mainUrl} />
        )
       : null
      }
      <li className={opacityStyle()}><Link to="/shop" onClick={() => props.setMainUrl('/shop')} style={getStyle({colorTheme, link: '/shop', mainUrl})}>Shop</Link></li>
      <li><Link id="shop" to="/cart" onClick={() => props.setMainUrl('/cart')} style={getStyle( {colorTheme: color, link: '/cart', mainUrl} )}>Cart</Link></li>
    </>
  );
};

const mapStateToProps = ({ sharedUiState }) => {
  const { secondaryMenuVisible, mainUrl } = sharedUiState;
  return { secondaryMenuVisible, mainUrl };
};

export default connect(mapStateToProps, { setMainUrl })(MainList);

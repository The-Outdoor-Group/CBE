import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStyle } from './assets/utilities/font-color-style';
import { setMainUrl } from '../../actions/shared-ui-actions';
import { createBrowserHistory } from 'history';

const MainList = (props) => {

  // console.log('props in MainList: ', props);

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
          <>
            <li className={opacityStyle()}><Link to="/arrow-rest" onClick={() => props.setMainUrl('/arrow-rest')} style={getStyle({colorTheme, link: '/arrow-rest', mainUrl})}>Arrow Rest</Link></li>
            <li className={opacityStyle()}><Link to="/stabilizers" onClick={() => props.setMainUrl('/stabilizers')} style={getStyle({colorTheme, link: '/stabilizers', mainUrl})}>Stabilizers</Link></li>
            <li className={opacityStyle()}><Link to="/quivers" onClick={() => props.setMainUrl('/quivers')} style={getStyle({colorTheme, link: '/quivers', mainUrl})}>Quivers</Link></li>
            <li className={opacityStyle()}><Link to="/sights" onClick={() => props.setMainUrl('/sights')} style={getStyle({colorTheme, link: '/sights', mainUrl})}>Sights</Link></li>
            <li className={opacityStyle()}><Link to="/product" onClick={() => props.setMainUrl('/product')} style={getStyle({colorTheme, link: '/product', mainUrl})}>Accessories</Link></li>
            <li className={opacityStyle()}><Link to="/shop" onClick={() => props.setMainUrl('/shop')} style={getStyle({colorTheme, link: '/shop', mainUrl})}>Shop</Link></li>
          </>
        )
       : null
      }
      <li><Link id="shop" to="/cart" onClick={() => props.setMainUrl('/cart')} style={getStyle( {colorTheme: color, link: '/cart', mainUrl} )}>Cart</Link></li>
    </>
  );
};

const mapStateToProps = ({ sharedUiState }) => {
  const { secondaryMenuVisible, mainUrl } = sharedUiState;
  return { secondaryMenuVisible, mainUrl };
};

export default connect(mapStateToProps, { setMainUrl })(MainList);

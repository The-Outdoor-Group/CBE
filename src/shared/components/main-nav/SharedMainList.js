import React from 'react';
import { Link } from 'react-router-dom';

const SharedMainList = props => {

  console.log('SharedMainList props: ', props);

  const { colorTheme, mainUrl, mobileLayout } =  props;

  const needStyle = () => props.getStyle ? true : false;
  const needOpacityStyle = () => props.opacityStyle ? true : false;

  return (
    <>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/arrow-rest" onClick={() => props.setMainUrl('/arrow-rest')}  style={props.getStyle({colorTheme, link: '/arrow-rest', mainUrl, mobileLayout})}>Arrow Rest</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/stabilizers" onClick={() => props.setMainUrl('/stabilizers')} style={needStyle() ? props.getStyle({colorTheme, link: '/stabilizers', mainUrl, mobileLayout}) : null}>Stabilizers</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/quivers" onClick={() => props.setMainUrl('/quivers')} style={needStyle() ? props.getStyle({colorTheme, link: '/quivers', mainUrl, mobileLayout}) : null}>Quivers</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/sights" onClick={() => props.setMainUrl('/sights')} style={needStyle() ? props.getStyle({colorTheme, link: '/sights', mainUrl, mobileLayout}) : null}>Sights</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/product" onClick={() => props.setMainUrl('/product')} style={needStyle() ? props.getStyle({colorTheme, link: '/product', mainUrl, mobileLayout}) : null}>Accessories</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/wishlist" onClick={() => props.setMainUrl('/wishlist')} style={needStyle() ? props.getStyle({colorTheme, link: '/wishlist', mainUrl, mobileLayout}) : null}>Wishlist</Link></li>
    </>
  );
};

export default SharedMainList;

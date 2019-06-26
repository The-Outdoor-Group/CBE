import React from 'react';
import { Link } from 'react-router-dom';

const SharedMainList = props => {

  const { colorTheme, mainUrl } =  props;

  const needStyle = () => props.getStyle ? true : false;
  const needOpacityStyle = () => props.opacityStyle ? true : false;

  return (
    <>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/arrow-rest" onClick={() => props.setMainUrl('/arrow-rest')}  style={needStyle() ? props.getStyle({colorTheme, link: '/arrow-rest', mainUrl}) : null}>Arrow Rest</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/stabilizers" onClick={() => props.setMainUrl('/stabilizers')} style={needStyle() ? props.getStyle({colorTheme, link: '/stabilizers', mainUrl}) : null}>Stabilizers</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/quivers" onClick={() => props.setMainUrl('/quivers')} style={needStyle() ? props.getStyle({colorTheme, link: '/quivers', mainUrl}) : null}>Quivers</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/sights" onClick={() => props.setMainUrl('/sights')} style={needStyle() ? props.getStyle({colorTheme, link: '/sights', mainUrl}) : null}>Sights</Link></li>
      <li className={needOpacityStyle() ? props.opacityStyle : null}><Link to="/product" onClick={() => props.setMainUrl('/product')} style={needStyle() ? props.getStyle({colorTheme, link: '/product', mainUrl}) : null}>Accessories</Link></li>
    </>
  );
};

export default SharedMainList;

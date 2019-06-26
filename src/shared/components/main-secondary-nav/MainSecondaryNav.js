import React, { createRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';
import { getStyle } from '../main-nav/assets/utilities/font-color-style';
import { sideMenuTimeline } from './../../utilities/tweens/color-tween';
import { useResize } from '../../utilities/shared-hooks/useResize';
import { setMainUrl } from '../../actions/shared-ui-actions';

import './assets/css/main-secondary-nav.css';

/*
 will need to be connected to redux store so that it can display the main nav items if the customer has scrolled down the page
*/

const SharedMainList = loadable( () => import('./../main-nav/SharedMainList') );

const MainSecondaryNav = (props) => {

  const [showMainNav, setShowMainNav] = useState(false);
  const divRef = createRef();
  var doNotHide;

  const getMobileSizeResult = () => useResize( window );

  if (process.env.IS_BROWSER) {
    doNotHide = getMobileSizeResult();
  }

  useEffect(() => {
    if (doNotHide !== null) setShowMainNav(!doNotHide); // !doNotHide means show
  });

  useEffect(() => {
    const timeline = sideMenuTimeline(divRef.current);
    props.secondaryMenuVisible ? timeline.play() : timeline.reverse();
  }, [props.secondaryMenuVisible]);

  const showMainNavNodes = () => showMainNav ? null : <SharedMainList getStyle={getStyle} setMainUrl={props.setMainUrl} colorTheme={props.colorTheme} mainUrl={props.mainUrl} mobileLayout={!showMainNav} />;

  const navNodes = () => (
      <div ref={divRef} id="main-secondary-menu">
        <nav>
          <ul>
            { showMainNavNodes() }
            <li><Link to="/contact-cbe">Contact CBE</Link></li>
            <li><Link to="/shop/apparel">Apparel</Link></li>
            <li><Link to="/dealers">Locate Dealers</Link></li>
            <li><Link to="/contingency">Contingency</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </nav>
      </div>
  );

  const { secondaryMenuVisible } = props;

  return navNodes(secondaryMenuVisible);
};

const mapStateToProps = ({ sharedUiState }) => {
  const { mainUrl, secondaryMenuVisible } = sharedUiState;
  return { mainUrl, secondaryMenuVisible };
};
export default connect(mapStateToProps, { setMainUrl })(MainSecondaryNav);

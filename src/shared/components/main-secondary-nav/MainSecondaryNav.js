import React, { createRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';
import isWindowSizeMobile from '../../utilities/isWindowSizeMobile';
import _debounce from 'lodash/debounce';
import { sideMenuTimeline } from './../../utilities/tweens/color-tween';
import './assets/css/main-secondary-nav.css';

/*
 will need to be connected to redux store so that it can display the main nav items if the customer has scrolled down the page
*/

const MainList = loadable( () => import('./../main-nav/MainList') );

const MainSecondaryNav = (props) => {

  const [showMainNav, setShowMainNav] = useState(false);
  const divRef = createRef();

  useEffect(() => {
    const timeline = sideMenuTimeline(divRef.current);
    props.sharedUiState.secondaryMenuVisible ? timeline.play() : timeline.reverse();
  }, [props.sharedUiState.secondaryMenuVisible]);

  useEffect(() => {
    const handleResize = () => isWindowSizeMobile() ? setShowMainNav(true) : setShowMainNav(false);
    const debouncedResize = _debounce(handleResize, 500);
    window.addEventListener('resize', debouncedResize);

    return () => window.removeEventListener('resize', debouncedResize)
  });

  const showMainNavNodes = () => showMainNav ? <MainList colorTheme={'dark'} /> : null;

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

  const { secondaryMenuVisible } = props.sharedUiState;

  return navNodes(secondaryMenuVisible);
};

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, null )(MainSecondaryNav);

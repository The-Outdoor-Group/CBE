import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../../utilities/isWindowSizeMobile';

import { setIdMatchForParentContainer, setMoreInfoPanelVisibility } from '../../actions/shared-ui-actions';

import { TimelineMax } from 'gsap';

import { tweenNavLinkColor } from '../../utilities/tweens/color-tween';

import './assets/css/main-nav.css';

const Logo = loadable( () => import('./assets/images/logo') );
const SecondaryMenuIcon = loadable( () => import('./assets/images/secondary-menu-icon') );
const MainList = loadable( () => import('./MainList') );
const InfoPanelOpenList = loadable( () => import('./InfoPanelOpenList') );

const MainNav = (props) => {

  const [colorTheme, setColorTheme] = useState('dark');
  const [oldElMatchForScrolling, setOldElMatchForScrolling] = useState(null);
  const [showMainNav, setShowMainNav] = useState(false);

  const navRef = createRef();
  const ulRef = createRef();

  useEffect(() => {
    require('gsap/ScrollToPlugin');

    const openMoreInfo = (elMatchForScrolling) => {

      setOldElMatchForScrolling( elMatchForScrolling );
      console.log('openMoreInfo elMatchForScrolling after state: ', elMatchForScrolling);

      const containerElRef = document.getElementById( elMatchForScrolling );

      if (containerElRef !== null) {
        let tl = new TimelineMax();
        tl
          .to( window, 1, { scrollTo: { y: containerElRef.children[1] }})
          .to( ulRef.current, 1, { y: '-100' } )
          .add( () => props.setMoreInfoPanelVisibility(true) )
          .to( ulRef.current, 1, { y: '0'} )
          .to( navRef.current, 1, { backgroundColor: '#fff' } )
          .add( () => tl = undefined );
      }
    };

    const closeMoreInfo = () => {

      console.log('oldElMatchForScrolling: ', oldElMatchForScrolling);
      const containerElRef = document.getElementById( oldElMatchForScrolling );

      if (containerElRef !== null) {
        let tl = new TimelineMax();
        tl
          .to( window, 1, { scrollTo: { y: containerElRef } } )
          .to( ulRef.current, 1, { y: '-100' } )
          .to( ulRef.current, 1, { y: '0'} )
          .to( navRef.current, 1, { backgroundColor: 'none' } )
          .add( () => tl = undefined );
          // .add( () => setOldElMatchForScrolling(null) ); // may not need to reset state
      }
    };

    if ( props.openMoreInfoPanel === true && props.elMatchForScrolling !== null ) { openMoreInfo( props.elMatchForScrolling ) }
     // resets back to proper state visibility for fast clicking between show and hide more info panel
    else if ( props.openMoreInfoPanel === true && props.elMatchForScrolling === null ) { props.setMoreInfoPanelVisibility(false) }
    else { closeMoreInfo() }
  }, [props.elMatchForScrolling, props.openMoreInfoPanel, props.setIdMatchForParentContainer]);

  useEffect(() => {
    let rect = navRef.current.getBoundingClientRect();
    console.log('main nav height: ', rect.bottom - rect.top );

    const handleResize = () => !isWindowSizeMobile() ? setShowMainNav(true) : setShowMainNav(false);

    const debouncedResize = _debounce(handleResize, 500);
    handleResize(); // to set initial state
    window.addEventListener('resize', debouncedResize);

    () => window.removeEventListener('resize', debouncedResize);
  });

  useEffect(() => {
    let elArrayRef = [];

    const changeNavColor = ( currentColor ) => {
      if (showMainNav) Array.from( navRef.current.children ).forEach( el => elArrayRef.push( el.children[0] ) );
      if (elArrayRef.length > 0) tweenNavLinkColor( currentColor, elArrayRef );
    }

    changeNavColor( props.mainNavThemeColor );

  }, [props.mainNavThemeColor]);


  const showNavListNode = () => (props.openMoreInfoPanel && (props.elMatchForScrolling !== null) ) ? <InfoPanelOpenList colorTheme={colorTheme} /> : <MainList colorTheme={props.mainNavThemeColor} />;
  const showMainNavNodes = () => showMainNav ? showNavListContainer() : null;
  const showNavListContainer = () => (
    <nav>
      <ul ref={ulRef}>
        { showNavListNode() }
      </ul>
    </nav>
  );

  return (
    <>
      <div ref={navRef} id="main-nav-container">
        <Link id="home-link" to="/"><Logo colorTheme={props.mainNavThemeColor} /></Link>
          { showMainNavNodes() }
        <Link id="shop" to="/cart"><span>Cart</span></Link>
      </div>
      <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon colorTheme={props.mainNavThemeColor} /></div>
    </>
  );
}

const mapStateToProps = ({ sharedUiState }) => {
  const { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling } = sharedUiState;
  return { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling };
};

export default connect(mapStateToProps, { setIdMatchForParentContainer, setMoreInfoPanelVisibility })(MainNav);

import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import { useResize } from '../../utilities/shared-hooks/useResize';

import { setIdMatchForParentContainer, setMoreInfoPanelVisibility, setMainUrl } from '../../actions/shared-ui-actions';

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
  const [showMainNav, setShowMainNav] = useState(null);

  const navRef = createRef();
  const ulRef = createRef();
  var doNotHide;


  const getMobileSizeResult = () => useResize( window );

  if (process.env.IS_BROWSER) {
    doNotHide = getMobileSizeResult();
  }

  useEffect(() => {
    if (doNotHide !== null) setShowMainNav(!doNotHide); // !doNotHide means show;
  });

  useEffect(() => {
    require('gsap/ScrollToPlugin');

    const openMoreInfo = (elMatchForScrolling) => {

      setOldElMatchForScrolling( elMatchForScrolling );

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
    let elArrayRef = [];

    const changeNavColor = ( currentColor ) => {
      if (showMainNav) Array.from( navRef.current.children ).forEach( el => elArrayRef.push( el.children[0] ) );
      if (elArrayRef.length > 0) tweenNavLinkColor( currentColor, elArrayRef );
    }

    changeNavColor( props.mainNavThemeColor );

  }, [props.mainNavThemeColor]);


  const showNavListNode = () => (props.openMoreInfoPanel && (props.elMatchForScrolling !== null) ) ? <InfoPanelOpenList colorTheme={colorTheme} /> : <MainList colorTheme={props.mainNavThemeColor} showAllLinks={showMainNav} />;
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
        <Link id="home-link" to='/' onClick={() => props.setMainUrl('/') }><Logo colorTheme={props.mainNavThemeColor} /></Link>
          { showNavListContainer() }
        <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon colorTheme={props.mainNavThemeColor} /></div>
      </div>
    </>
  );
}

const mapStateToProps = ({ sharedUiState }) => {
  const { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling } = sharedUiState;
  return { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling };
};

export default connect(mapStateToProps, { setIdMatchForParentContainer, setMoreInfoPanelVisibility, setMainUrl })(MainNav);

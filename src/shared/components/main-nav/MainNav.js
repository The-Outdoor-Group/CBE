import React, { createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../../utilities/isWindowSizeMobile';

import { setIdMatchForParentContainer } from '../../actions/shared-ui-actions';

import { TimelineMax } from 'gsap';
// require('gsap/ScrollToPlugin');

import { tweenNavLinkColor } from '../../utilities/tweens/color-tween';

import './assets/css/main-nav.css';

const Logo = loadable( () => import('./assets/images/logo') );
const SecondaryMenuIcon = loadable( () => import('./assets/images/secondary-menu-icon') );
const MainList = loadable( () => import('./MainList') );
const InfoPanelOpenList = loadable( () => import('./InfoPanelOpenList') );

const MainNav = (props) => {

  const [colorTheme, setColorTheme] = useState('dark');
  const [openMoreInfoPanel, setOpenMoreInfoPanel] = useState(false);
  const [showMainNav, setShowMainNav] = useState(false);

  const elArrayRef = createRef();
  const navRef = createRef();
  const ulRef = createRef();
  const shopLinkRef = createRef();

  useEffect(() => {
    require('gsap/ScrollToPlugin');

    const openMoreInfo = () => {
      const containerElRef = document.getElementById(props.elMatchForScrolling);
      if (containerElRef && containerElRef !== null) {
      let tl = new TimelineMax();
      tl
        .to( window, 1, { scrollTo: { y: containerElRef.children[1] }})
        .to( ulRef.current, 1, { y: '-100' } )
        .add( () => setOpenMoreInfoPanel(!openMoreInfoPanel) )
        .to( ulRef.current, 1, { y: '0'} )
        .to( navRef.current, 1, { backgroundColor: '#fff' } )
        .add( () => tl = undefined );
      }
    };

    const closeMoreInfo = () => {
      const containerElRef = document.getElementById(props.elMatchForScrolling);
      if (containerElRef && containerElRef !== null) {
        let tl = new TimelineMax();
        tl
          .to( window, 1, { scrollTo: { y: containerElRef } } )
          .to( ulRef.current, 1, { y: '-100' } )
          .add( () => setOpenMoreInfoPanel(!openMoreInfoPanel) )
          .to( ulRef.current, 1, { y: '0'} )
          .to( navRef.current, 1, { backgroundColor: 'none' } )
          .add( () => props.setIdMatchForParentContainer(null) )
          .add( () => tl = undefined );
      }
    };

    if (props.openMoreInfoPanel) {
      openMoreInfo( props.openMoreInfoPanel );
    } else {
      closeMoreInfo();
    }
  }, [props.elMatchForScrolling, props.openMoreInfoPanel]);

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
    const changeNavColor = ( currentColor ) => {
      elArrayRef = [shopLinkRef];
       if (showMainNav) Array.from(ulRef.children).forEach( el => elArrayRef.push( el.children[0] ) );

      tweenNavLinkColor(currentColor, elArrayRef.current);
      setColorTheme(currentColor);

      changeNavColor( currentColor );
    }
  }, [props.mainNavThemeColor]);


  const showNavListNode = () => (openMoreInfoPanel && showMainNav) ? <InfoPanelOpenList colorTheme={colorTheme} /> : <MainList colorTheme={colorTheme} />;
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
        <Link id="home-link" to="/"><Logo colorTheme={colorTheme} /></Link>
          { showMainNavNodes() }
        <Link id="shop" to="/cart"><span ref={shopLinkRef}>Cart</span></Link>
      </div>
      <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon colorTheme={colorTheme} /></div>
    </>
  );
}

const mapStateToProps = ({ sharedUiState }) => {
  const { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling } = sharedUiState;
  return { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling };
};

export default connect(mapStateToProps, { setIdMatchForParentContainer})(MainNav);

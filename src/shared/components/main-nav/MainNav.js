import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../../utilities/isWindowSizeMobile';

import { TimelineMax } from 'gsap';

import { tweenNavLinkColor, /* mainNavMoreInfoPanelTimeline */ } from '../../utilities/tweens/color-tween';

import './assets/css/main-nav.css';

const Logo = loadable( () => import('./assets/images/logo') );
const SecondaryMenuIcon = loadable( () => import('./assets/images/secondary-menu-icon') );
const MainList = loadable( () => import('./MainList') );
const InfoPanelOpenList = loadable( () => import('./InfoPanelOpenList') );

class MainNav extends Component {
  constructor() {
    super();

    this.elArray, this.nav, this.ul, this.shopLink,
    this.containerEl;

    this.debouncedResize;

    this.tl = new TimelineMax();

    this.changeNavColor = this.changeNavColor.bind(this);
    this.changeMenuContents = this.changeMenuContents.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      colorTheme: 'dark',
      openMoreInfoPanel: false,
      showMainNav: false
    };
  }

  componentDidMount() {
    // just for dev; will make a connected prop
    let rect = this.nav.getBoundingClientRect();
    console.log('main nav height: ', rect.bottom - rect.top );

    require('gsap/ScrollToPlugin');

    this.debouncedResize = _debounce(this.handleResize, 500);
    this.handleResize(); // to set initial state
    window.addEventListener('resize', this.debouncedResize);
  }

  componentDidUpdate(prevProps, prevState) {

    let prevColor = prevProps.mainNavThemeColor;
    let currentColor = this.props.mainNavThemeColor;
    let { showMainNav } = this.state;

    let prevMoreInfoPanelState = prevProps.openMoreInfoPanel;
    let currentMoreInfoPanelState = this.props.openMoreInfoPanel;

    if (prevColor !== currentColor) this.changeNavColor( currentColor );

    if (prevMoreInfoPanelState !== currentMoreInfoPanelState && showMainNav) this.changeMenuContents( currentMoreInfoPanelState );

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResize);
  }

  handleResize() {
    !isWindowSizeMobile() ? this.setState({ showMainNav: true }) : this.setState({ showMainNav: false });
  }

  changeMenuContents( currentMoreInfoPanelOpen ) {

    // get the name of moreInfoHandle that was clicked
    this.containerEl = document.getElementById(this.props.elMatchForScrolling);

    // b/c dom changes, gsap loses context so code dup is necessary
    if (currentMoreInfoPanelOpen) {
      this.tl
        .to( window, 1, { scrollTo: { y: this.containerEl.children[1] }})
        .to( this.ul, 1, { y: '-100' } )
        .add( () => this.setState({ openMoreInfoPanel: !this.state.openMoreInfoPanel }) )
        .to( this.ul, 1, { y: '0'} )
        .to( this.nav, 1, { backgroundColor: '#fff' } )
    } else {
      this.tl
        .to( window, 1, { scrollTo: { y: this.containerEl } } )
        .to( this.ul, 1, { y: '-100' } )
        .add( () => this.setState({ openMoreInfoPanel: !this.state.openMoreInfoPanel }) )
        .to( this.ul, 1, { y: '0'} )
        .to( this.nav, 1, { backgroundColor: 'none' } )

    }
  }

  changeNavColor( currentColor ) {
    let { showMainNav } = this.state;
    this.elArray = [this.shopLink];
     if (showMainNav) Array.from(this.ul.children).forEach( el => this.elArray.push( el.children[0] ) );

    tweenNavLinkColor(currentColor, this.elArray);

    this.setState({ colorTheme: currentColor });
  }

  render() {
    let { openMoreInfoPanel, showMainNav, colorTheme } = this.state;

    console.log('showMainNav: ', showMainNav);

    const showNavListNode = () => (openMoreInfoPanel && showMainNav) ? <InfoPanelOpenList colorTheme={colorTheme} /> : <MainList colorTheme={colorTheme} />;
    const showMainNavNodes = () => showMainNav ? showNavListContainer() : null;
    const showNavListContainer = () => (
      <nav>
        <ul ref={el => this.ul = el}>
          { showNavListNode() }
        </ul>
      </nav>
    );

    return (
      <Fragment>
        <div ref={el => this.nav = el} id="main-nav-container">
          <Link id="home-link" to="/"><Logo colorTheme={this.state.colorTheme} /></Link>
            { showMainNavNodes() }
          <Link id="shop" to="/cart"><span ref={el => this.shopLink = el}>Cart</span></Link>
        </div>
        <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon colorTheme={this.state.colorTheme} /></div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => {
  const { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling } = sharedUiState;
  return { mainNavThemeColor, openMoreInfoPanel, elMatchForScrolling };
};

export default connect(mapStateToProps)(MainNav);

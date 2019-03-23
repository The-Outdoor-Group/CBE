import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';

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

    this.elArray, this.nav, this.ul, this.shopLink;

    this.tl = new TimelineMax();

    this.changeNavColor = this.changeNavColor.bind(this);
    this.changeMenuContents = this.changeMenuContents.bind(this);

    this.state = {
      colorTheme: 'dark',
      openMoreInfoPanel: false
    };
  }

  componentDidMount() {
    // just for dev; will make a connected prop
    let rect = this.nav.getBoundingClientRect();
    console.log('main nav height: ', rect.bottom - rect.top );

    require('gsap/ScrollToPlugin');
  }

  componentDidUpdate(prevProps, prevState) {
    let prevColor = prevProps.mainNavThemeColor;
    let currentColor = this.props.mainNavThemeColor;

    let prevMoreInfoPanelState = prevProps.openMoreInfoPanel;
    let currentMoreInfoPanelState = this.props.openMoreInfoPanel;

    if (prevColor !== currentColor) this.changeNavColor( currentColor );

    if (prevMoreInfoPanelState !== currentMoreInfoPanelState) this.changeMenuContents( currentMoreInfoPanelState );

  }


  changeMenuContents( currentMoreInfoPanelOpen ) {
    // b/c dom changes gsap loses context so code dup is necessary
    if (currentMoreInfoPanelOpen) {
      this.tl
        .to( this.ul, 1, { y: '-100' } )
        .add( () => this.setState({ openMoreInfoPanel: !this.state.openMoreInfoPanel }) )
        .to( this.ul, 1, { y: '0'} )
        .to( this.nav, 1, { backgroundColor: '#fff' } )
        .to( window, 1, { scrollTo: { y: window.innerHeight } } ) // capture starting point
    } else {
      this.tl
        .to( this.ul, 1, { y: '-100' } )
        .add( () => this.setState({ openMoreInfoPanel: !this.state.openMoreInfoPanel }) )
        .to( this.ul, 1, { y: '0'} )
        .to( this.nav, 1, { backgroundColor: 'none' } )
        .to( window, 1, { scrollTo: { y: -window.innerHeight } } ) // go back to captured starting point
    }
  }

  changeNavColor( currentColor ) {
    this.elArray = [this.shopLink];
    Array.from(this.ul.children).forEach( el => this.elArray.push( el.children[0] ) );

    tweenNavLinkColor(currentColor, this.elArray);

    this.setState({ colorTheme: currentColor });
  }

  render() {
    const showNavListNode = () => (this.state.openMoreInfoPanel) ? <InfoPanelOpenList colorTheme={this.state.colorTheme} /> : <MainList colorTheme={this.state.colorTheme} />;

    return (
      <Fragment>
        <div ref={el => this.nav = el} id="main-nav-container">
          <Link id="home-link" to="/"><Logo colorTheme={this.state.colorTheme} /></Link>
          <nav>
            <ul ref={el => this.ul = el}>
              { showNavListNode() }
            </ul>
          </nav>
          <Link id="shop" to="/cart"><span ref={el => this.shopLink = el}>Cart</span></Link>
        </div>
        <div id="secondary-menu-icon-wrapper"><SecondaryMenuIcon colorTheme={this.state.colorTheme} /></div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => {
  const { mainNavThemeColor, openMoreInfoPanel } = sharedUiState;
  return { mainNavThemeColor, openMoreInfoPanel };
};
export default connect(mapStateToProps)(MainNav);

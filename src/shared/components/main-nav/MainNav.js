import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import { connect } from 'react-redux';
import { tweenNavLinkColor } from '../../utilities/tweens/color-tween';

import './assets/css/main-nav.css';

const Logo = loadable( () => import('./assets/images/logo') );
const SecondaryMenuIcon = loadable( () => import('./assets/images/secondary-menu-icon') );
const MainList = loadable( () => import('./MainList') );
const InfoPanelOpenList = loadable( () => import('./InfoPanelOpenList') );

/*
  just an idea - update the middle nav menu so that it shows pertinant navigation if customer
  is over a specific part of the page
*/

class MainNav extends Component {
  constructor() {
    super();

    this.elArray, this.nav, this.ul, this.shopLink;

    this.state = {
      colorTheme: 'dark'
    }
  }

  componentDidMount() {
    // just for dev; will make a connected prop
    let rect = this.nav.getBoundingClientRect();
    console.log('main nav height: ', rect.bottom - rect.top );
  }

  componentDidUpdate(prevProps, nextState) {
    let prevColor = prevProps.sharedUiState.mainNavThemeColor;
    let currentColor = this.props.sharedUiState.mainNavThemeColor;

    if (prevColor !== currentColor) {
      this.elArray = [this.shopLink];
      Array.from(this.ul.children).forEach( el => this.elArray.push( el.children[0] ) );

      tweenNavLinkColor(currentColor, this.elArray);

      this.setState({
        colorTheme: currentColor
      });
    }
  }

  render() {

    const showNavListNode = () => {
      const { openMoreInfoPanel } = this.props.sharedUiState;
      if (openMoreInfoPanel) {
        return <InfoPanelOpenList colorTheme={this.state.colorTheme} />;
      } else {
        return <MainList colorTheme={this.state.colorTheme} />;
      }
    };

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

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps)(MainNav);

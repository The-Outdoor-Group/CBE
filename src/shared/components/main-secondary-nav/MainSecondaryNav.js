import React, { Component } from 'react';
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

class MainSecondaryNav extends Component {

  constructor() {
    super();

    this.handleResize = this.handleResize.bind(this);
    this.debouncedResize;
    this.timeline, this.div;

    this.state = {
      showMainNav: false
    }
  }

  componentDidMount() {
    this.timeline = sideMenuTimeline( this.div );
    this.debouncedResize = _debounce(this.handleResize, 500);
    window.addEventListener('resize', this.debouncedResize)
  }

  componentDidUpdate(prevProps, nextState) {
    if (prevProps.sharedUiState.secondaryMenuVisible !== this.props.sharedUiState.secondaryMenuVisible) {
      this.props.sharedUiState.secondaryMenuVisible ? this.timeline.play() : this.timeline.reverse();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResize);
  }

  handleResize() {
    isWindowSizeMobile() ? this.setState({ showMainNav: true }) : this.setState({ showMainNav: false })
  }

  render() {
    const showMainNavNodes = () => {
      const { showMainNav } = this.state;
      return showMainNav ? <MainList colorTheme={'dark'} /> : null;
    }

    const navNodes = (isVisible) => {
        return (
          <div ref={(el) => this.div = el} id="main-secondary-menu">
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
    };

    const { secondaryMenuVisible } = this.props.sharedUiState;

    return navNodes(secondaryMenuVisible);
  }
};

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, null )(MainSecondaryNav);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { TimelineMax } from 'gsap';

import './assets/css/main-secondary-nav.css';

/*
 will need to be connected to redux store so that it can display the main nav items if the customer has scrolled down the page
*/

class MainSecondaryNav extends Component {

  constructor() {
    super();

    this.timeline = new TimelineMax({ paused: true });
    this.div;

  }

  componentDidMount() {

    this.timeline
      .fromTo(
        this.div,
        1,
        { right: "-100%" },
        { right: "0%" }
      );
  }

  componentDidUpdate(prevProps, nextState) {
    if (prevProps.sharedUiState.secondaryMenuVisible !== this.props.sharedUiState.secondaryMenuVisible) {
      this.props.sharedUiState.secondaryMenuVisible ? this.timeline.play() : this.timeline.reverse();
    }
  }

  render() {

    const navNodes = (isVisible) => {
        return (
          <div ref={(el) => this.div = el} id="main-secondary-menu">
            <nav>
              <ul>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSecondaryNavState } from './../../../../actions/shared-ui-actions';
import { TimelineMax } from 'gsap';

import './../css/secondary-menu-icon.css';

class SecondaryMenuIcon extends Component {

  constructor() {
    super();

    this.state = {
      showSecondaryMenu: false
    };

    this.topLine, this.middleLine, this.bottomLine;
    this.timeline = new TimelineMax({ paused: true });

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timeline
      .fromTo(
        this.topLine,
        0.5,
        { rotation: 0, x: "0px", y: "0px" },
        { rotation: 45, x: "-12px", y: "8px" }
      )
      .fromTo(
        this.middleLine,
        0.5,
        { rotation: 0, x: "0px", y: "0px" },
        { rotation: -45, x: "12px", y: "-6px" },
        "-=0.5"
      )
      .fromTo(
        this.bottomLine,
        0.5,
        { autoAlpha: 1, y: "0px" },
        { autoAlpha: 0, y: "-5px" },
        "-=0.6"
      );
  }

  handleClick() {
    this.setState(
      { showSecondaryMenu: !this.state.showSecondaryMenu },
      () => {
        this.props.setSecondaryNavState(this.state.showSecondaryMenu);
        this.state.showSecondaryMenu ? this.timeline.play() : this.timeline.reverse()
      }
    );
  }

  render() {
    // console.log('this.props sec menu icon: ', this.props);

    return (
        <svg onClick={this.handleClick} id="secondary-menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="57" height="38" viewBox="0 0 57 38">
        <title>secondary-menu-icon</title>
        <line ref={(el) => this.topLine = el} className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="5" x2="57" y2="5" />
        <line ref={(el) => this.middleLine = el} className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="19" x2="57" y2="19" />
        <line ref={(el) => this.bottomLine = el} className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="33" x2="57" y2="33" />
      </svg>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setSecondaryNavState })(SecondaryMenuIcon)

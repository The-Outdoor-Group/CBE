import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSecondaryNavState } from './../../../../actions/shared-ui-actions';
import { hamburgerIconTimeline, tweenStrokeColor } from '../../../../utilities/tweens/color-tween';

import './../css/secondary-menu-icon.css';

class SecondaryMenuIcon extends Component {

  constructor() {
    super();

    this.topLine, this.middleLine, this.bottomLine;
    this.timeline;

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      showSecondaryMenu: false
    };
  }

  componentDidMount() {
    this.timeline = hamburgerIconTimeline(this.topLine, this.middleLine, this.bottomLine);
  }

  componentDidUpdate(prevProps, nextState) {
    let prevColor = prevProps.colorTheme;
    let currentColor = this.props.colorTheme;

    if (prevColor !== currentColor) {
      tweenStrokeColor( currentColor, [this.topLine, this.middleLine, this.bottomLine] );
    }
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

    return (
        <svg onClick={this.handleClick} id="secondary-menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <line ref={(el) => this.topLine = el} className="hamburger-line" y1="5" x2="28" y2="5" />
        <line ref={(el) => this.middleLine = el} className="hamburger-line" y1="12" x2="28" y2="12" />
        <line ref={(el) => this.bottomLine = el} className="hamburger-line" y1="19" x2="28" y2="19" />
      </svg>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setSecondaryNavState })(SecondaryMenuIcon)

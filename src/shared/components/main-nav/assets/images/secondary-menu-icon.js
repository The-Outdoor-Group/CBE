import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSecondaryNavState } from './../../../../actions/shared-ui-actions';
import { hamburgerIconTimeline, tweenSecondaryMenuColor } from '../utilities/color-tween';

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
      tweenSecondaryMenuColor( currentColor, [this.topLine, this.middleLine, this.bottomLine] );
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

import React, { Component } from 'react';
import { plusIconSvgTimeline } from '../../../../utilities/tweens/color-tween';

import './../css/plus-icon.css';

class PlusIcon extends Component {
  constructor() {
    super();

    this.circle, this.firstLine, this.secondLine, this.tl;
  }

  componentDidMount() {
    const { colorTheme } = this.props;
    this.tl = plusIconSvgTimeline( colorTheme, this.circle, [this.firstLine, this.secondLine] );
  }

  componentDidUpdate(prevProps, nextState) {
    if (prevProps.changeDueToHover !== this.props.changeDueToHover) {
      this.props.changeDueToHover ? this.tl.play() : this.tl.reverse();
    }
  }

  render() {
    const { colorTheme } = this.props;
    const setColorTheme = (colorTheme) => colorTheme === 'dark' ? 'dark' : 'light';

    return (
      <svg className="plus-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="59.3" height="59.3" viewBox="0 0 59.3 59.3">
        <circle ref={el => this.circle = el} className={`plus-icon-parts ${setColorTheme(colorTheme)}`} cx="29.6" cy="29.6" r="27.6"/>
        <line ref={el => this.firstLine = el} className={`plus-icon-parts ${setColorTheme(colorTheme)}`} x1="29.6" y1="18.6" x2="29.6" y2="41" />
        <line ref={el => this.secondLine = el} className={`plus-icon-parts ${setColorTheme(colorTheme)}`} x1="19.6" y1="30" x2="40.4" y2="30" />
      </svg>
    );
  }
}

export default PlusIcon;

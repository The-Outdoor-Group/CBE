import React, { Component } from 'react';
import { tweenStrokeColor, moreContentArrowTimeline } from '../../../../utilities/tweens/color-tween'
import './../css/more-content-arrow.css';

class MoreContentArrow extends Component {
  constructor() {
    super();

    this.svg, this.line;
  }

  componentDidMount() {
    if (!this.props.endOfPage) moreContentArrowTimeline(this.svg);
  }

  componentDidUpdate(prevProps, nextState) {
    let prevColor = prevProps.colorTheme;
    let currentColor = this.props.colorTheme;

    if (prevColor !== currentColor) {
      if (!this.props.endOfPage) {
        tweenStrokeColor( currentColor, this.line );
        moreContentArrowTimeline(this.svg);
      }
    }
  }

  render() {

    const renderMoreContentArrowNode = () => !this.props.endOfPage
    ?
      (
        <svg ref={el => this.svg = el} id="more-content-arrow" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="50.6" height="28.5" viewBox="0 0 50.6 28.5">
          <polyline ref={el => this.line = el} class="cls-1" points="49.2 2.1 25.7 25.7 1.4 1.4"/>
        </svg>
      )
    :
    null;

    return renderMoreContentArrowNode();
  }
}

export default MoreContentArrow;

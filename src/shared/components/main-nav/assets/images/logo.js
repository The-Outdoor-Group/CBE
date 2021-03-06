import React, { Component } from 'react';
import { tweenLogoSvgColor } from '../../../../utilities/tweens/color-tween';
import './../css/logo.css';

export default class Logo extends Component {

  constructor() {
    super();

    this.logo;
  }

  componentDidUpdate(prevProps, nextState) {
    let prevColor = prevProps.colorTheme;
    let currentColor = this.props.colorTheme;

    if (prevColor !== currentColor) {
      tweenLogoSvgColor(currentColor, this.logo);
    }
  }

  render() {
    return (
      <svg ref={el => this.logo = el} id="logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-20 -15 400 150">
        <g>
          <path d="M898.4,494.9H973c7.6.6,19.7,14.5,18.2,27.5-.8,7.4-3,13.9-9.9,18.2a18.9,18.9,0,0,1,8.6,11.1,26.4,26.4,0,0,1,1.5,8.3c.3,11.2-6.2,23.9-17.4,25.9H898.4S898.5,496.7,898.4,494.9Zm24.8,71.6c12.5,0,24.6.2,36.7-.1,4-.1,6-2.9,6.3-7,.5-5.9-2.4-9.2-8.8-9.3-10.5-.1-21,0-31.4,0-1,0-2-.1-2.8,1.2Zm0-36.1c.8.3,1.1.6,1.4.6,11.3,0,22.6.1,34,0,5-.1,7.6-3,7.7-7.9s-2.4-8.3-7.7-8.4c-11.3-.2-22.6,0-33.9,0-.5,0-.9.4-1.5.8A123.4,123.4,0,0,0,923.2,530.4Z" transform="translate(-793.1 -494.8)"/>
          <path d="M1095,567v19h-93V495h93c0,6.4.1,13,.1,19.3l-67.9.2s-.2,11.5,0,17.3h55.9l.2,18.1h-56c-.1,5.4.1,16.8.1,16.8Z" transform="translate(-793.1 -494.8)"/>
          <path d="M868,586H815c-4.8-.1-19.8-6-20-21s0-32.7,0-49c.3-9.5,7.9-19.8,22-21,16.3,0,32.7-.5,49,0,12.5.3,15.8,5.5,18.7,11.5s2.9,23.2,2.9,23.2H864s-.5-6.3-.9-9.3a6.3,6.3,0,0,0-5.1-5.5,16.1,16.1,0,0,0-4.9-.6h-23a16.5,16.5,0,0,0-4.4.5c-4,.9-5.8,2.8-5.8,6.9-.1,12.7,0,25.3,0,38A6.5,6.5,0,0,0,824,566a14.2,14.2,0,0,0,5.8,1h17.5a71.2,71.2,0,0,0,8-.1c5.2-.4,7.1-2.5,8-7.7.5-2.6,1.1-8.1,1.1-8.1h23.4s.2,13.6-1.6,19.9C883.9,579,877.7,584.9,868,586Z" transform="translate(-793.1 -494.8)"/>
          <polygon points="301.8 47.1 295.3 47.1 295.3 44.2 301.8 44.2 301.8 47.1"/>
          <path d="M852.6,539.1h41.2v2.9l-41,.3c-4.8,8.1-8.8,10.4-14.7,8.6a10.9,10.9,0,0,1-7.3-10.8,10.8,10.8,0,0,1,8.4-9.8C845,529.1,849,531.7,852.6,539.1Zm-2.6,1.6a8.8,8.8,0,0,0-8.1-8.5,8.4,8.4,0,1,0,8.1,8.5Z" transform="translate(-793.1 -494.8)"/>
          <polygon points="196.9 44.2 203.7 44.2 203.7 47.1 196.9 47.1 196.9 44.2"/>
          <path d="M841.5,546a5.4,5.4,0,0,1-5.4-5.3,5.6,5.6,0,0,1,5.7-5.6,5.7,5.7,0,0,1,5.2,5.6A5.4,5.4,0,0,1,841.5,546Z" transform="translate(-793.1 -494.8)"/>
          <path className="e2528cc1-e2ed-45d4-8532-45a5fe1df121" d="M851.5,540a14.6,14.6,0,0,0-5.5-8c-2.8-1.9-7.3-1.2-10.5,1.5s-4.5,6.7-3,10,4.2,6.6,9,6.6,7.2-2.7,9-6.6a8.2,8.2,0,0,0,1-3" transform="translate(-793.1 -494.8)"/>
          <path className="e2528cc1-e2ed-45d4-8532-45a5fe1df121" d="M892.5,540.5H852" transform="translate(-793.1 -494.8)"/>
          <path className="e2528cc1-e2ed-45d4-8532-45a5fe1df121" d="M990.5,561.5h-10" transform="translate(-793.1 -494.8)"/>
        </g>
        <text className="e62393f8-8251-4737-ad73-c57bb1818d90" transform="translate(-5.5, 126.4)">CUSTOM BOW EQUIPMENT</text>
      </svg>

    );
  }
}

import React, { Component } from 'react';
import loadable from '@loadable/component';

import './../assets/css/call-to-action.css';

const PlusIcon = loadable( () => import('./../assets/images/PlusIcon') );

class CallToAction extends Component {

  constructor() {
    super();

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave =  this.handleMouseLeave.bind(this);

    this.state = {
      hovering: false
    }

  }

  handleMouseEnter() {
    this.setState({ hovering: true });
  }

  handleMouseLeave() {
    this.setState({ hovering: false });
  }

  render() {
    const { colorTheme } = this.props;

    return (
      <ul className="call-to-action">
        <li
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="learn-more-wrapper"
        >
          <PlusIcon colorTheme={colorTheme} changeDueToHover={this.state.hovering} />
          <span>Learn More</span>
        </li>
        <li><button>Order Now</button></li>
      </ul>
    );
  }

}

export default CallToAction;

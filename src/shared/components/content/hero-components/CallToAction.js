import React, { Component } from 'react';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../../../utilities/isWindowSizeMobile';

import './../assets/css/call-to-action.css';

const PlusIcon = loadable( () => import('./../assets/images/PlusIcon') );

class CallToAction extends Component {

  constructor() {
    super();

    this.debouncedResize;

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave =  this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      hovering: false,
      showMoreInfo: false,
      showLearnMore: false
    };

  }

  componentDidMount() {
    this.debouncedResize = _debounce(this.handleResize, 500);
    this.handleResize();
    window.addEventListener('resize', this.debouncedResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResize);
  }

  handleResize() {
    !isWindowSizeMobile() ? this.setState({ showLearnMore: true }) : this.setState({ showLearnMore: false });
  }

  handleMouseEnter() {
    this.setState({ hovering: true });
  }

  handleMouseLeave() {
    this.setState({ hovering: false });
  }

  handleClick() {
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    },
      () => {
        const { moreInfoHandle} = this.props;
        const { showMoreInfo } = this.state;
        this.props.showMoreInfo(showMoreInfo, moreInfoHandle);
      }
    );
  }

  render() {

    const { colorTheme } = this.props;
    let { showLearnMore } = this.state;

    const learnMoreNode = (
      <li
        onClick={ this.handleClick }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="learn-more-wrapper"
      >
        <PlusIcon colorTheme={colorTheme} changeDueToHover={this.state.hovering} />
        <span>Learn More</span>
      </li>
    );

    const showLearnMoreNode = () => showLearnMore ? learnMoreNode : null;

    return (
      <ul className="call-to-action">
        { showLearnMoreNode() }
        <li><button>Order Now</button></li>
      </ul>
    );
  }

}

export default CallToAction;

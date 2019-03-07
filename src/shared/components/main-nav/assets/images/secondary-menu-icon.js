import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSecondaryNavState } from './../../../../actions/shared-ui-actions';

import './../css/secondary-menu-icon.css';

class SecondaryMenuIcon extends Component {

  constructor() {
    super();

    this.state = {
      showSecondaryMenu: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      { showSecondaryMenu: !this.state.showSecondaryMenu },
      () => this.props.setSecondaryNavState(this.state.showSecondaryMenu)
    )
  }

  render() {
    // console.log('this.props sec menu icon: ', this.props);

    return (
        <svg onClick={this.handleClick} id="secondary-menu-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="57" height="38" viewBox="0 0 57 38">
        <title>secondary-menu-icon</title>
        <line className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="5" x2="57" y2="5" />
        <line className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="19" x2="57" y2="19" />
        <line className="f9e01109-13bb-4aba-8a9d-a559ca668c4d" y1="33" x2="57" y2="33" />
      </svg>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setSecondaryNavState })(SecondaryMenuIcon)

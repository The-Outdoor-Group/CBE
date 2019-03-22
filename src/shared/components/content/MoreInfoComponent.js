import React, { Component } from 'react';
import { connect } from 'react-redux';
import assembleComponent from './assets/assembleComponents';
import { setMoreInfoPanelVisibility } from './../../actions/shared-ui-actions';

import './assets/css/moreInfoPanel/more-info-component.css';

class MoreInfoComponent extends Component {
  render() {
    const { handle } = this.props;
    {/* below is the floating close button <p>Animate and return data from a query; pass {handle}  */}
    return (
      <section className="more-info-panel">
        <article>
          <header><h2>This is a more info title</h2></header>
          <p>This is the copy of the more info article</p>
        </article>
        <span className="more-info-close" onClick={() => this.props.setMoreInfoPanelVisibility(false)}>x close</span>
      </section>
    );
  }
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMoreInfoPanelVisibility })(MoreInfoComponent);

import React, { Component } from 'react';
import assembleComponent from './assets/assembleComponents';
import loadable from '@loadable/component';
import { connect } from 'react-redux';
import { setMoreInfoPanelVisibility } from '../../actions/shared-ui-actions';
import './assets/css/hero.css';

class Hero extends Component {

  constructor() {
    super();

    this.handleShowInfo = this.handleShowInfo.bind(this);
    this.handlePanelVisibility = this.handlePanelVisibility.bind(this);

    this.state = {
      showInfo: false,
      clickedMoreInfoHandle: null,
      hidden: null
    };
  }

  componentDidUpdate(prevProps, nextState) {
    const prevInfoPanelState = prevProps.sharedUiState.openMoreInfoPanel;
    const currentInfoPanelState = this.props.sharedUiState.openMoreInfoPanel;

    if (prevInfoPanelState !== currentInfoPanelState) {
      this.handlePanelVisibility();
    }
  }


  handlePanelVisibility() {
    const { clickedMoreInfoHandle, showInfo, hidden } = this.state;
    const { moreInfoHandle } = this.props.data;
    const { openMoreInfoPanel } = this.props.sharedUiState;

    if (openMoreInfoPanel) {
      if (clickedMoreInfoHandle !== moreInfoHandle) { this.setState({ hidden: "hidden" }) }
    } else {
      this.setState({ hidden: null, clickedMoreInfoHandle: null, showInfo: false });
    }

  }

  handleShowInfo(showMoreInfo, clickedMoreInfoHandle) {
    this.props.setMoreInfoPanelVisibility(showMoreInfo);
    this.setState({
      showInfo: showMoreInfo,
      clickedMoreInfoHandle
    });
  }

  render() {
    const { data } = this.props;
    const { cssClass, moreInfoHandle } = this.props.data;

    const loadMoreInfoComponentNode = () => {
      const MoreInfoComponent = loadable( () => import('./MoreInfoComponent') );
      return <MoreInfoComponent handle={moreInfoHandle} />;
    }

    return (
      <section className={`hero-region ${cssClass} ${this.state.hidden !== null ? this.state.hidden : ""}`}>
        { assembleComponent( { props: data, showInfo: this.handleShowInfo } ) }
        { this.state.showInfo ? loadMoreInfoComponentNode() : null }
      </section>
    );
  }
}

const mapStateToProps = ({sharedUiState }) => ({sharedUiState });
export default connect(mapStateToProps, { setMoreInfoPanelVisibility })(Hero);

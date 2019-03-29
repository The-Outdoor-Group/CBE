import React, { Component } from 'react';
import assembleComponent from './assets/hero-creator-functions/assembleComponents';
import loadable from '@loadable/component';
import { connect } from 'react-redux';
import { setMoreInfoPanelVisibility, setIdMatchForParentContainer } from '../../actions/shared-ui-actions';
import './assets/css/hero.css';

const MoreInfoComponent = loadable( () => import('./MoreInfoComponent') );

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
    const prevInfoPanelState = prevProps.openMoreInfoPanel;
    const currentInfoPanelState = this.props.openMoreInfoPanel;

    if (prevInfoPanelState !== currentInfoPanelState) {
      this.handlePanelVisibility();
    }
  }


  handlePanelVisibility() {
    const { clickedMoreInfoHandle, showInfo, hidden } = this.state;
    const { moreInfoHandle } = this.props.data;
    const { openMoreInfoPanel } = this.props;

    if (openMoreInfoPanel) {
      if (clickedMoreInfoHandle !== moreInfoHandle) { this.setState({ hidden: "hidden" }) }
    } else {
      this.setState({ hidden: null, clickedMoreInfoHandle: null, showInfo: false });
    }

  }

  handleShowInfo(showMoreInfo, clickedMoreInfoHandle) {
    this.props.setMoreInfoPanelVisibility(showMoreInfo);
    this.props.setIdMatchForParentContainer(clickedMoreInfoHandle); // for scrolling
    this.setState({
      showInfo: showMoreInfo,
      clickedMoreInfoHandle
    });
  }

  render() {
    const { data } = this.props;
    const { cssClass, moreInfoHandle } = this.props.data;

    return (
      <section id={moreInfoHandle ? moreInfoHandle : null} className={`hero-region ${cssClass} ${this.state.hidden !== null ? this.state.hidden : ""}`}>
        { assembleComponent( { props: data, showInfo: this.handleShowInfo } ) }
        <MoreInfoComponent showInfo={this.state.showInfo} handle={moreInfoHandle} />
      </section>
    );
  }
}

const mapStateToProps = ({sharedUiState }) => {
  const { openMoreInfoPanel } = sharedUiState;
  return { openMoreInfoPanel };
};
export default connect(mapStateToProps, { setMoreInfoPanelVisibility, setIdMatchForParentContainer })(Hero);

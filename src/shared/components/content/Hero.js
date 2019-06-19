import React, { useEffect, useState } from 'react';
import assembleComponent from './assets/hero-creator-functions/assembleComponents';
import loadable from '@loadable/component';
import { connect } from 'react-redux';
import { setMoreInfoPanelVisibility, setIdMatchForParentContainer } from '../../actions/shared-ui-actions';
import './assets/css/hero.css';

const MoreInfoComponent = loadable( () => import('./MoreInfoComponent') );

const Hero = (props) => {

  const [showInfo, setShowInfo] = useState(false);
  const [clickedMoreInfoHandle, setClickedMoreInfoHandle] = useState(null);
  const [hidden, setHidden] = useState(null);

  useEffect(() => {

    const handlePanelVisibility = () => {
      const { moreInfoHandle } = props.data;
      const { openMoreInfoPanel, elMatchForScrolling } = props;

      if (openMoreInfoPanel) {
        setShowInfo(true);
        if (moreInfoHandle !== elMatchForScrolling) setHidden("hidden");
      } else {
        setHidden(null);
        setClickedMoreInfoHandle(null);
        setShowInfo(false);
      }
    };

    handlePanelVisibility();
  }, [props.openMoreInfoPanel]);

  const handleShowInfo = (showMoreInfo, clickedMoreInfoHandle) => {
    props.setMoreInfoPanelVisibility(showMoreInfo);
    props.setIdMatchForParentContainer(clickedMoreInfoHandle); // for scrolling
    setShowInfo(showMoreInfo);
    setClickedMoreInfoHandle(clickedMoreInfoHandle);
  };

  const { cssClass, moreInfoHandle } = props.data;

  return (
    <section id={moreInfoHandle ? moreInfoHandle : null} className={`hero-region ${cssClass} ${hidden !== null ? hidden : ""}`}>
      { assembleComponent( { props: props.data, showInfo: () => handleShowInfo() } ) }
      <MoreInfoComponent showInfo={showInfo} handle={moreInfoHandle} />
    </section>
  );
}

const mapStateToProps = ({sharedUiState }) => {
  const { openMoreInfoPanel, elMatchForScrolling } = sharedUiState;
  return { openMoreInfoPanel, elMatchForScrolling };
};
export default connect(mapStateToProps, { setMoreInfoPanelVisibility, setIdMatchForParentContainer })(Hero);

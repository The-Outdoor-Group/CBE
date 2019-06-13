import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../../../utilities/isWindowSizeMobile';

import { setMoreInfoPanelVisibility, setIdMatchForParentContainer } from '../../../actions/shared-ui-actions';
import './../assets/css/call-to-action.css';

const PlusIcon = loadable( () => import('./../assets/images/PlusIcon') );
import TestHook from '../../../containers/testHook';

const CallToAction = (props) => {

  const [hovering, setHovering] = useState(false);
  const [toShowMoreInfo, setToShowMoreInfo] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  useEffect(() => {
    const handleResize = () => !isWindowSizeMobile() ? setShowLearnMore(true) : setShowLearnMore(false);
    const debouncedResize = _debounce(handleResize, 500);

    handleResize();
    window.addEventListener('resize', debouncedResize);

    () => window.removeEventListener('resize', debouncedResize);
  });

  const handleClick = () => {
    console.log('props: ', props);
    console.log('toShowMoreInfo in CallToAction component: ', toShowMoreInfo);

    const { moreInfoHandle} = props;
    console.log('moreInfoHandle: ', moreInfoHandle);
    // this will need to be a redux prop

    console.log('toShowMoreInfo in CallToAction, after set to opposite and about to pass into redux: ', !(setToShowMoreInfo(toShowMoreInfo)) );
    props.setMoreInfoPanelVisibility( !(setToShowMoreInfo(toShowMoreInfo)) );
    props.setIdMatchForParentContainer(moreInfoHandle);
  }

  const { colorTheme } = props;
  const learnMoreNode = (
    <li
      onClick={ () => handleClick() }
      onMouseEnter={ () => setHovering(true)}
      onMouseLeave={ () => setHovering(false) }
      className="learn-more-wrapper"
    >
      <PlusIcon colorTheme={colorTheme} changeDueToHover={hovering} />
      <span>Learn More</span>
    </li>
  );

  const showLearnMoreNode = () => showLearnMore ? learnMoreNode : null;

  return (
    <ul className="call-to-action">
      { showLearnMoreNode() }
      <li><button>Order Now</button></li>
      <TestHook />
    </ul>
  )

}

// export default CallToAction;
const mapStateToProps = ({ sharedUiState }) => {
  const { openMoreInfoPanel } = sharedUiState;
  return { openMoreInfoPanel };
};

export default connect(mapStateToProps, { setMoreInfoPanelVisibility, setIdMatchForParentContainer })(CallToAction);

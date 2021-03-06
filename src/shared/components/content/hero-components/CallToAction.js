import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import { useResize } from '../../../utilities/shared-hooks/useResize';
import { setMoreInfoPanelVisibility, setIdMatchForParentContainer } from '../../../actions/shared-ui-actions';
import './../assets/css/call-to-action.css';

const PlusIcon = loadable( () => import('./../assets/images/PlusIcon') );

const CallToAction = (props) => {

  const [hovering, setHovering] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  var doNotHide;

  const getMobileSizeResult = () => useResize( window );

  if (process.env.IS_BROWSER) {
    doNotHide = getMobileSizeResult();
  }

  useEffect(() => {
    if (doNotHide !== null) setShowLearnMore(!doNotHide); // !doNotHide means show
  });

  const handleClick = () => {
    const { moreInfoHandle} = props;

    props.setMoreInfoPanelVisibility(true);
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
    </ul>
  )

}

// export default CallToAction;
const mapStateToProps = ({ sharedUiState }) => {
  const { openMoreInfoPanel } = sharedUiState;
  return { openMoreInfoPanel };
};

export default connect(mapStateToProps, { setMoreInfoPanelVisibility, setIdMatchForParentContainer })(CallToAction);

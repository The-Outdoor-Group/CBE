import React from 'react';
import loadable from '@loadable/component';

import './../assets/css/video-component.css';

const Stats = loadable( () => import('./Stats') );

const vidWithControls = (src) => (type) => (<video controls><source src={src} type={type} /></video>);
const vidNoControls = (src) => (type) => (<video><source src={src} type={type} /></video>);

const videoNode = (controls) => (src) => (type) => controls ? vidWithControls(src)(type) : vidNoControls(src)(type);

const VideoComponent = (props) => {
  const { controls, src, type } = props.video;
  const { stats } = props;

  return (
    <div className="three-fourths-screen-video-wrapper">
      { videoNode(controls)(src)(type) }
      <Stats stats={stats} />
    </div>
  );
};

export default VideoComponent;

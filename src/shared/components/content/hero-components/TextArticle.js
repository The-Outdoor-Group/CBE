import React from 'react';
import loadable from '@loadable/component'

import './../assets/css/text-content.css';

const Image = loadable( () => import('./Image') );
const CallToAction = loadable( () => import('./CallToAction') );


const TextArticle = (props) => {

  const { h2, h1, cssClassName, p } = props.copy;
  const { colorTheme, showMoreInfo, moreInfoHandle } = props;

  return (
    <div className={`${cssClassName}-text-content`}>
      <header>
        <h2>{h2}</h2>
        <h1>{h1}</h1>
        { cssClassName === 'horizontal' ? <CallToAction colorTheme={colorTheme} moreInfoHandle={moreInfoHandle}/> : null }
      </header>
      <p>{p}</p>
      {/* do a check of what the asset is, or even exists; can be video or image */}
      { cssClassName === 'vertical' ? <Image data={ {src: "https://via.placeholder.com/325x300", alt:"placeholder", cssClass: "horizontal"} } /> : null }

      { cssClassName === 'vertical' ? <CallToAction colorTheme={colorTheme} moreInfoHandle={moreInfoHandle} /> : null }
    </div>
  );
};

export default TextArticle;

//showMoreInfo={showMoreInfo}

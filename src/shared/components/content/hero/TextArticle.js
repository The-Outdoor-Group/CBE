import React from 'react';
import loadable from '@loadable/component'

import './../assets/css/text-content.css';

const CallToAction = loadable( () => import('./CallToAction') );


const TextArticle = (props) => {
  const { h2, h1, cssClassName, p } = props.props;

  return (
    <div className={`${cssClassName}-text-content`}>
      <header>
        <h2>{h2}</h2>
        <h1>{h1}</h1>
        { cssClassName === 'horizontal' ? <CallToAction /> : null }
      </header>
      <p>{p}</p>
      {/* do a check of what the asset is, or even exists; can be video or image */}
      { cssClassName === 'vertical' ? <img src="https://via.placeholder.com/325x300" /> : null }

      { cssClassName === 'vertical' ? <CallToAction /> : null }
    </div>
  );
};

export default TextArticle;

import React from 'react';
import loadable from '@loadable/component';

import './../css/hero-vertical-quarter-article-three-quarter-media.css';

const TextArticle = loadable( () => import('./../../hero/TextArticle') );
const Image = loadable( () => import('./../../hero/Image') );

const createHeroVerticalQuarterArticleThreeQuarterMediaComponent = (props, showMoreInfo) => {
  const { cssClass, textArticle, moreInfoHandle } = props;

  return (
      <article className="hero-vertical-quarter-article-three-quarter-media">
        <TextArticle showMoreInfo={showMoreInfo} copy={textArticle} colorTheme={cssClass} moreInfoHandle={moreInfoHandle} />

        {/* will be another component; will be image or video */}
        <div>
          <Image data={ {src: "https://via.placeholder.com/975x800", alt:"placeholder", cssClass: "vertical"} } />
        </div>
      </article>
  );
};

export default createHeroVerticalQuarterArticleThreeQuarterMediaComponent;

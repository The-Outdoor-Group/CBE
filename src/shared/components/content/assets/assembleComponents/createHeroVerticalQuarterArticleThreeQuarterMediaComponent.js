import React from 'react';
import loadable from '@loadable/component';
import './../css/hero-vertical-quarter-article-three-quarter-media.css';

const createHeroVerticalQuarterArticleThreeQuarterMediaComponent = (props, showMoreInfo) => {
  const TextArticle = loadable( () => import('./../../hero/TextArticle') );
  const { cssClass, textArticle, moreInfoHandle } = props;

  return (
      <article className="hero-vertical-quarter-article-three-quarter-media">
        <TextArticle showMoreInfo={showMoreInfo} copy={textArticle} colorTheme={cssClass} moreInfoHandle={moreInfoHandle} />

        {/* will be another component; will be image or video */}
        <div>
          <img style={{width: '100%'}} src="https://via.placeholder.com/975x800" />
        </div>
      </article>
  );
};

export default createHeroVerticalQuarterArticleThreeQuarterMediaComponent;

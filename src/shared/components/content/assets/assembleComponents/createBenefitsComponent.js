import React from 'react';
import loadable from '@loadable/component';

const Stats = loadable( () => import('./../../hero/Stats') );
const TextArticle = loadable( () => import('./../../hero/TextArticle') );

import './../css/benefits-article.css';

const createBenefitsComponent = (props) => {
  const { stats, textArticle } = props;

  return (
    <article id="benefits-article">
      <div className="image-full-width">
        <img src="https://via.placeholder.com/1380x600" />
        <Stats stats={stats} />
      </div>

      <TextArticle props={textArticle} />

    </article>
  );
};

export default createBenefitsComponent;

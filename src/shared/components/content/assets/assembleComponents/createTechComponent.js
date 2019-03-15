import React from 'react';
import loadable from '@loadable/component'

const TextArticle = loadable( () => import('./../../hero/TextArticle') );

import './../css/tech-specs-article.css';

const createTechComponent = (props) => {
  const { textArticle } = props;

  return (
    <article id="tech-specs-article">
      <TextArticle props={textArticle} />

      {/* will be another component; will be image or video */}
      <div>
        <img style={{width: '100%'}} src="https://via.placeholder.com/975x800" />
      </div>

    </article>
  );
};

export default createTechComponent;

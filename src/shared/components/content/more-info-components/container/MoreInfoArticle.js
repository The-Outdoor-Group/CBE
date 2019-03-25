import React from 'react';
import assembleComponent from '../assembleComponents';
import './assets/css/article.css';

const MoreInfoArticle = (props) => {
  const { data } = props;
  console.log('props in MoreInfoArticle: ', data);

  return (
    <article className="more-info-article">
      { assembleComponent({ props: data }) }
    </article>
  );
}

export default MoreInfoArticle;

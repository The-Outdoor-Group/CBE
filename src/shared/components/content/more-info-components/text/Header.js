import React from 'react';
import './assets/css/header.css';

const Header = (props) => {
  const headerArticleNodes = () => props.articles.map( (article, i) =>
    (
      <div className="header-article-node">
        <h3>{ article.h3 }</h3>
        <p>{ article.p }</p>
      </div>
    )
  );

  return headerArticleNodes();
}

export default Header;

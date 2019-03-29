import React from 'react';
import loadable from '@loadable/component';
import './../../css/hero-vertical-half-media-half-article.css'

const Image = loadable( () => import('./../../../hero-components/Image') );
const ListButton = loadable( () => import('./../../../hero-components/ListButton') );
const List = loadable( () => import('./../../../hero-components/List') );

const createHeroVerticalHalfMediaHalfArticleComponent = props => {
  const { image, content } = props;
  const { lists, navLinks, title } = content;

  const listButtonNodes = () => navLinks.map( (link, i) => <li><ListButton key={i} name={link.name} /></li> );
  const listNodes = () => lists.map( (list, i) => <List key={i} list={list} /> );

  return (
    <article className="hero-vertical-half-media-half-article">
      <Image data={ {src: "https://via.placeholder.com/325x300", alt:"placeholder", cssClass: "vertical"} } />
      <div className="list-wrapper">
        <header>
          <h1>{ title }</h1>
        </header>
        <ul>{ listButtonNodes() }</ul>
        <div className="list-node-wrapper">
         { listNodes() }
        </div>
      </div>
    </article>
  );

};

export default createHeroVerticalHalfMediaHalfArticleComponent;

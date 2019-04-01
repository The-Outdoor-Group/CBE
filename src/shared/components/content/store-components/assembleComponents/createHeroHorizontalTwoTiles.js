import React from 'react';

const createHeroHorizontalTwoTiles = props => {
  const { title } = props;
  return (
    <article className="hero-horizontal-two-tiles">
      <header>
        <h1>{ title }</h1>
      </header>
    </article>
  );
};

export default createHeroHorizontalTwoTiles;

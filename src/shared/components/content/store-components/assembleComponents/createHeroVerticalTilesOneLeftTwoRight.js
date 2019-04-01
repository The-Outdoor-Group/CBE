import React from 'react';

const createHeroVerticalTilesOneLeftTwoRight = props => {
  const { title } = props;
  return (
    <article className="hero-vertical-tiles-one-left-two-right">
      <header>
        <h1>{ title }</h1>
      </header>
    </article>
  );
};

export default createHeroVerticalTilesOneLeftTwoRight;

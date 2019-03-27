import React, { Fragment } from 'react';
import loadable from '@loadable/component'

const TitleHeader = loadable( () => import('./../../hero/TitleHeader') );
const Stats = loadable( () => import('./../../hero/Stats') );

import './../css/hero-horizontal-whole-component.css';

export const createHeroHorizontalWholeComponent = (props) => {
  console.log('this.props test: ', props);
  const { stats, title } = props;

  return (
      <article className="hero-horizontal-whole-component">
        <TitleHeader title={title} />
        <Stats stats={stats} />
      </article>
  );
}

export default createHeroHorizontalWholeComponent;

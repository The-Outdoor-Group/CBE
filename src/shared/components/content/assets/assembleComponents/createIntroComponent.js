import React, { Fragment } from 'react';
import loadable from '@loadable/component'

const TitleHeader = loadable( () => import('./../../hero/TitleHeader') );
const Stats = loadable( () => import('./../../hero/Stats') );

import './../css/intro-component.css'

export const createIntroComponent = (props) => {
  const { stats, title } = props;
  return (
      <article className="intro-component">
        <TitleHeader title={title} />
        <Stats stats={stats} />
      </article>
  );
}

export default createIntroComponent;

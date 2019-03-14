import React, { Fragment } from 'react';
import loadable from '@loadable/component'

const TitleHeader = loadable( () => import('./../../hero/TitleHeader') );
const Stats = loadable( () => import('./../../hero/Stats') );

export const createIntroComponent = (props) => (
    <Fragment>
      <TitleHeader title={props.title} />
      <Stats stats={props.stats} />
    </Fragment>
);

export default createIntroComponent;

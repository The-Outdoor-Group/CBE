import React from 'react';
import createIntroComponent from './createIntroComponent';
import createTechComponent from './createTechComponent';

const assembleComponent = (props) => {
  // console.log('props in assembleComponent: ', props);

  const { type } = props;

  switch(type) {

    case 'intro':
     return createIntroComponent(props);

    case 'tech':
      return createTechComponent(props);

    default:
      return null;
  }
}

export default assembleComponent;

import React from 'react';
import createIntroComponent from './createIntroComponent';
import createTechComponent from './createTechComponent';
import createBenefitsComponent from './createBenefitsComponent';
import createUsecaseComponent from './createUsecaseComponent';

const assembleComponent = (props) => {

  const { type } = props;

  switch(type) {

    case 'intro':
     return createIntroComponent(props);

    case 'tech':
      return createTechComponent(props);

    case 'benefits':
      return createBenefitsComponent(props);

    case 'usecase':
      return createUsecaseComponent(props);

    default:
      return null;
  }
}

export default assembleComponent;

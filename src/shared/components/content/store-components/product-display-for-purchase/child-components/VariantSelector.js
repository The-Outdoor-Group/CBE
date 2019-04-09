/*
  For each variant, the options key will have a value that is an array of objects.
  Each object will have a name key with a value of that variant title, and a values key with the choices for that variant.

  Based on options clicked, search the variants,edges node objects for a match. If finds all matching criteria, then add to cart. else {
    display a message otherwise. Perhaps filtering an array in memory as choices are made. The parent will have the array to manage
  }
*/

import React from 'react';

const optionValueNodes = ({ option, valueClick }) => option.values.map( (value, i) => {
  const name = option.name;
  return <li onClick={ () => valueClick({ name, value }) } key={i}>{ value }</li>;
});

const optionNodes = (props) => {
    const { options, valueClick } = props;

    return options.map( (option, i) => (
      <article key={i}>
        <header>
          <h4>{ option.name }</h4>
        </header>
        <ul className="variant-selections">
          { optionValueNodes({ option, valueClick }) }
        </ul>
      </article>
    )
  )
};

const VariantSelector = props => optionNodes( props );

export default VariantSelector;

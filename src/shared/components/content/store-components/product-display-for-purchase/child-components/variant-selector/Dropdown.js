import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './assets/css/dropdown.css';

const Dropdown = props => {

  const [ visibility, setVisibility ] = useState(false);
  const [ activeVariantSelection, setActiveVariantSelection ] = useState(null);

  const handleVariantTitleClick = () => {
    setVisibility( !visibility );
  };

  const handleVariantClick = (value) => {
    setActiveVariantSelection(value);
    setVisibility( !visibility );
  };

  const determineMessage = () => activeVariantSelection === null ? 'Select PIN Size' : `PIN Size: ${activeVariantSelection}`;

  const setActive = (value) =>
    activeVariantSelection === value
      ?
        { border: '2px solid', fontWeight: 600 }
      :
        null;

  const showVariants = () =>
    visibility
      ?
        (
          <div className="variant-links-wrapper"> {/* wrapper that contains values to select. this will render or not depending on state of Link */}
            <ul>
              <li><Link onClick={ () => handleVariantClick(1) } style={ setActive(1) } >1</Link></li>
              <li><Link onClick={ () => handleVariantClick(2) } style={ setActive(2) } >2</Link></li>
              <li><Link onClick={ () => handleVariantClick(3) } style={ setActive(3) } >3</Link></li>
              <li><Link onClick={ () => handleVariantClick(4) } style={ setActive(4) } >4</Link></li>
            </ul>
          </div>
        )
      :
        null;

  return (
    <div className="fancy-dropdown">
      <div>
        <Link className="variant-title" onClick={ () => handleVariantTitleClick() }>{ determineMessage() }</Link>
        {/* svg of arrow going up and down depending on state of dropdown open */}
      </div>
      { showVariants() }
    </div>
  );
};

export default Dropdown;


/*

Needs to be fed in data that represents the variants. The title needs to be dynamic as well as the data

*/

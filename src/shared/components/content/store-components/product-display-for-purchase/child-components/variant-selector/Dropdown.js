import React from 'react';
import './assets/css/dropdown.css';

const Dropdown = props => {
  return (
    <div className="fancy-dropdown"> {/* wrapper for variant component */}
      <div> {/* wrapper to hold button text and arrow */}
        <button className="variant-title">Select PIN Size</button>
        {/* svg of arrow going up and down depending on state of dropdown open */}
      </div>
      <div className="variant-buttons-wrapper"> {/* wrapper that contains values to select. this will render or not depending on state of button */}
        <ul>
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

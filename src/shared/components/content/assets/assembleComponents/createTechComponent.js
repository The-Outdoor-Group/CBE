import React from 'react';
import loadable from '@loadable/component'

import './../css/tech-specs.css';
import './../css/vertical-text-content.css';

export const createTechComponent = (props) => (
    <article id="tech-specs">


      <div className="vertical-text-content">
        <header>
          <h2>Accuracy</h2>
          <h1>The Most Accurate</h1>
        </header>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        <img src="https://via.placeholder.com/180x250" />

        <ul className="call-to-action">
          <li>+ Learn More</li>
          <li><button>Order Now</button></li>
        </ul>


      </div>


      <div>
        <img src="https://via.placeholder.com/800x800" />
      </div>
    </article>
);

export default createTechComponent;

// <TitleHeader title={props.title} />

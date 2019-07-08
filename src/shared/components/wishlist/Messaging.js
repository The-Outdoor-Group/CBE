import React from 'react';

import './assets/css/messaging.css';

const Messaging = props => {
  return (
    <article>
      <header>
        <h1>Your Wishlist</h1>
      </header>
      <p>Have something in mind that you'd love as a gift? Maybe your birthday is coming up, or the holidays? Add items to your
      Wishlist and share them with your friends and family. They'll know exactly what to get you!</p>
      <footer>
        <ul>
          <li><button>Add Items To Your Wishlist</button></li>
          <li><button>Share Your Wishlist</button></li>
        </ul>
      </footer>
    </article>
  );
};

export default Messaging;

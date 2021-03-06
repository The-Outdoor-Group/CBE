import React, { Component } from 'react';
import loadable from '@loadable/component';

import './assets/css/horizontal-image-slider.css';

const Image = loadable( () => import('../../hero-components/Image') );
const Header = loadable( () => import('./../text/Header') );
const NavigationArrow = loadable( () => import('./assets/images/NavigationArrow')  );

class HorizontalImageSlider extends Component {
  constructor() {
    super();

    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.state = {
      currentArticleIndex: 0
    };
  }

  handlePreviousClick() {
    const { currentArticleIndex } = this.state;

    if (currentArticleIndex <= 0) { this.setState({ currentArticleIndex: this.props.articles.length - 1 }) }
    else { this.setState({ currentArticleIndex: currentArticleIndex - 1 }) }
  }

  handleNextClick() {
    const { currentArticleIndex } = this.state;

    if (currentArticleIndex >= this.props.articles.length - 1) { this.setState({ currentArticleIndex: 0 }) }
    else { this.setState({ currentArticleIndex: currentArticleIndex + 1 }) }
  }

  render() {
    const { currentArticleIndex } = this.state;
    let article = [{ h3: this.props.articles[currentArticleIndex].h3, p: this.props.articles[currentArticleIndex].p }];

    return (
      <article className="horizontal-image-slider">
        <div>
          <span onClick={this.handlePreviousClick}><NavigationArrow /></span>
          <Image data={this.props.articles[currentArticleIndex].image} />
          <span onClick={this.handleNextClick}><NavigationArrow /></span>
        </div>
        <Header articles={article} />
      </article>
    );
  }
}

export default HorizontalImageSlider;


/*
  One slider to rule them all

  - have a simple fade animation. old school and clean.

*/

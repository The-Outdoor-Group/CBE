import React, { Component } from 'react';
import loadable from '@loadable/component';

const Image = loadable( () => import('./../media-assets/Image') );
const Header = loadable( () => import('./../text/Header') );

class HorizontalImageSlider extends Component {
  constructor(props) {
    super(props);

    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.state = {
      currentArticleIndex: 0
    };
  }

  handlePreviousClick() {
    const { currentArticleIndex } = this.state;
    if (currentArticleIndex <= 0) {
      this.setState({
        currentArticleIndex: this.props.articles.length - 1
      });
    } else {
      this.setState({
        currentArticleIndex: currentArticleIndex - 1
      });
    }
  }

  handleNextClick() {
    const { currentArticleIndex } = this.state;
    if (currentArticleIndex >= this.props.articles.length - 1) {
      this.setState({
        currentArticleIndex: 0
      });
    } else {
      this.setState({
        currentArticleIndex: currentArticleIndex + 1
      });
    }
  }

  render() {
    console.log('HorizontalImageSlider: ', this.props);  // this is an array that must be navigated thru based on left and right clicks on arrows
    const { currentArticleIndex } = this.state;

    console.log('this.props.articles[currentArticleIndex].image: ', this.props.articles[currentArticleIndex].image);

    let article = [{ h3: this.props.articles[currentArticleIndex].h3, p: this.props.articles[currentArticleIndex].p }];
    return (
      <article className="horizontal-image-slider">
        {/*
          Will have a fn that gets the first item in the array.
          It will have left and right navigation elements: arrows.
            -- each will have their own event handler to incr or decr
            Will each click update the necessary src or would it be cool to
              slide in the image and fade out and in the text.
            Will need to know length of array so know when to start back at 0
            and when to go back to last index of array
        */}
        <div>
          <span onClick={this.handlePreviousClick}> previous </span>
          <Image data={this.props.articles[currentArticleIndex].image} />
          <span onClick={this.handleNextClick}> next </span>
        </div>
        <Header articles={article} />
      </article>
    );
  }
}

export default HorizontalImageSlider;

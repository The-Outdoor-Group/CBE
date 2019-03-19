import React, { Component } from 'react';
import assembleComponent from './assets/assembleComponents';

import './assets/css/hero.css';


class Hero extends Component {

  constructor() {
    super();

    this.handleShowInfo = this.handleShowInfo.bind(this);

    this.state = {
      showInfo: false
    }
  }

  handleShowInfo(showInfo) {
    this.setState({ showInfo });
  }

  render() {
    const { data } = this.props;
    const showInfo = this.handleShowInfo;
    const { cssClass } = this.props.data;

    console.log('this.state: ', this.state);

    return (
      <section className={`hero-region ${cssClass}`}>
        { assembleComponent(data, () => this.handleShowInfo(showInfo)) }
           {this.state.showInfo ? <p>Animate and return data from a query; pass in an arg</p> : null }
      </section>
    );

  }
}

export default Hero;


// const Hero = (data) => {
//   const { props } = data;
//   const { cssClass } = props;
//
//   return (
//     <section className={`hero-region ${cssClass}`}>
//       { assembleComponent(props) }
//       <p>Yo man</p>
//     </section>
//   );
// };

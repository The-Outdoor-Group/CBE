import { TimelineMax } from 'gsap';

if (process.env.IS_BROWSER) {
  const TweenLite = require('gsap/TweenLite');
  const TweenMax = require('gsap/TweenMax');
}

export const hamburgerIconTimeline = ( topLine, middleLine, bottomLine ) => {
  let tl = new TimelineMax({ paused: true });

  return tl
    .fromTo(
      topLine,
      0.5,
      { rotation: 0, x: "0px", y: "0px" },
      { rotation: 45, x: "-12px", y: "8px" }
    )
    .fromTo(
      middleLine,
      0.5,
      { rotation: 0, x: "0px", y: "0px" },
      { rotation: -45, x: "12px", y: "-6px" },
      "-=0.5"
    )
    .fromTo(
      bottomLine,
      0.5,
      { autoAlpha: 1, y: "0px" },
      { autoAlpha: 0, y: "-5px" },
      "-=0.6"
    );
};


export const moreContentArrowTimeline = ( el ) => {

  TweenMax.fromTo(
    el,
    1,
    { bottom: '1%', repeat: -1, yoyo: true },
    { bottom: '0%', repeat: -1, yoyo: true }
  )
};


export const tweenNavLinkColor = (currentColor, array) => {
  if (currentColor === 'light') {
    TweenLite.fromTo(
      array,
      1,
      {color: '#000'}, {color: '#fff'}
    );
  } else {
    TweenLite.fromTo(
      array,
      1,
      { color: '#FFF' },
      { color: '#000' }
    );
  }
};


export const tweenStrokeColor = (currentColor, el) => {
  if (currentColor === 'light') {
    TweenLite.fromTo(
      el,
      1,
      { stroke: '#000' },
      { stroke: '#fff' }
    );
  } else {
    TweenLite.fromTo(
      el,
      1,
      { stroke: '#FFF' },
      { stroke: '#000' }
    );
  }
};


export const tweenLogoSvgColor = (currentColor, el) => {
  if (currentColor === 'light') {
    TweenLite.fromTo(
      el,
      1,
      { fill: '#000' },
      { fill: '#fff' }
    );
  } else {
    TweenLite.fromTo(
      el,
      1,
      { fill: '#FFF' },
      { fill: '#000' }
    );
  }
};

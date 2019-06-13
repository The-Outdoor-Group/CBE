import { TimelineMax } from 'gsap';

if (process.env.IS_BROWSER) {
  const TweenLite = require('gsap/TweenLite');
  const TweenMax = require('gsap/TweenMax');
  require('gsap/ScrollToPlugin');
}

export const hamburgerIconTimeline = ( topLine, middleLine, bottomLine ) => {
  let tl = new TimelineMax({ paused: true });

  return tl
    .fromTo(
      topLine,
      0.5,
      {  x: 0, y: 0 },
      {  x: 0, y: 7 }
    )
    .fromTo(
      bottomLine,
      0.5,
      { x: 0, y: 0 },
      { x: 0, y: -7},
      "-=0.5"
    )
    .fromTo(
      topLine,
      0.5,
      { rotation: 0 },
      { rotation: 45 }
    )
    .fromTo(
      bottomLine,
      0.5,
      { rotation: 0 },
      { rotation: -45 },
      "-=0.5"
    )
    .fromTo(
      middleLine,
      0.5,
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      "-=1"
    );
};


export const sideMenuTimeline = (el) => {
  let tl = new TimelineMax({ paused: true });

  return tl
    .fromTo(
      el,
      1,
      { right: "-100%" },
      { right: "0%" }
    );
}

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


export const plusIconSvgTimeline = (currentColor, circle, lines) => {
  let tl = new TimelineMax({ paused: true });

  if (currentColor === 'light') {
    tl
      .fromTo(
        circle,
        0.25,
        { fill: 'none' },
        { fill: '#000' }
      )
      .fromTo(
        lines,
        0.25,
        { stroke: '#000' },
        { stroke: '#FFF' },
        "-=0.25"
      );
  } else {
    tl
      .fromTo(
        circle,
        0.25,
        { fill: 'none' },
        { fill: '#FFF' }
      )
      .fromTo(
        lines,
        0.25,
        { stroke: '#FFF' },
        { stroke: '#000' },
        "-=0.25"
      );
  }
  return tl;
}

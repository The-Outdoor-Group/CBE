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

// export const mainNavMoreInfoPanelTimeline = ( ul, nav, fn ) => {
//   let tl = new TimelineMax({ paused: true });
//
//   return tl
//     .to(
//       ul,
//       1,
//       { y: '-100' }
//     )
//     .add( () => {
//       console.log('fn: ', fn);
//       fn
//     } )
//     .to(
//       ul,
//       1,
//       { y: '0'}
//     )
//     .to(
//       nav,
//       1,
//       { backgroundColor: '#fff' }
//     )
//     .to(
//       window,
//       1,
//       { scrollTo: { y: window.innerHeight } } // will need fine-tuning ... want to record where it is when it starts and then go back vs all the way to top
//     );
// }

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

const isInViewPort = (el) => (mainNavHeight) => {
  let rect = el.getBoundingClientRect();

  // console.log( 'rect.top: ', rect.top );
  // console.log( 'window.innerHeight: ', window.innerHeight );
  // console.log( 'rect.bottom: ', rect.bottom );
  // console.log('-------------------------------------------------');

  // let windowHeight = ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) );
  let hotSpot = 80;

  // console.log('windowHeight: ', windowHeight);

  // const isInFullView = () => (rect.top <= 0 && (rect.bottom <= windowHeight && rect.bottom > 0) ) ? true : false;
  // const topInViewNotReachedBottom = () => ( (rect.top > 0 && rect.top <= windowHeight ) && rect.bottom > windowHeight ) ? true : false;
  // const scrolledPastBeginBottomNotInView = () => ( rect.top < 0 && rect.bottom >= windowHeight ) ? true : false;
  // const scrolledPastBeginBottomInView = () => ( rect.top < 0 && (rect.bottom <= windowHeight && rect.bottom > 0 )) ? true : false;
  // const scrolledPastCompletely = () => ( rect.top < 0 && rect.bottom < 0 ) ? true : false;
  // const notScrolledIntoViewYet = () => (rect.top > windowHeight && rect.bottom > windowHeight ) ? true : false;

  // const isInFullView = () => (rect.top <= 0 && (rect.bottom <= hotSpot && rect.bottom > 0) ) ? true : false;
  const topInViewNotReachedBottom = () => ( (rect.top > 0 && rect.top <= hotSpot ) && rect.bottom > hotSpot ) ? true : false;
  const scrolledPastBeginBottomNotInView = () => ( rect.top < 0 && rect.bottom >= hotSpot ) ? true : false;
  const scrolledPastBeginBottomInView = () => ( rect.top < 0 && (rect.bottom <= hotSpot && rect.bottom > 0 )) ? true : false;
  const scrolledPastCompletely = () => ( rect.top < 0 && rect.bottom < 0 ) ? true : false;
  const notScrolledIntoViewYet = () => (rect.top > hotSpot && rect.bottom > hotSpot ) ? true : false;

  console.log('-------------------------------------------------');
  console.log( 'rect.top: ', rect.top );
  console.log( 'rect.bottom: ', rect.bottom );
  console.log('                                                  ');
  // console.log('isInFullView: ', isInFullView());
  console.log('topInViewNotReachedBottom: ', topInViewNotReachedBottom());
  console.log('scrolledPastBeginBottomNotInView: ', scrolledPastBeginBottomNotInView());
  console.log('scrolledPastBeginBottomInView: ', scrolledPastBeginBottomInView());
  console.log('scrolledPastCompletely: ', scrolledPastCompletely());
  console.log('notScrolledIntoViewYet: ', notScrolledIntoViewYet());
  console.log('-------------------------------------------------');

  return (
    rect.bottom <= ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) ) && rect.bottom >= mainNavHeight
  );
};

export const locateElAtTop = (className) => (mainNavHeight) => Array.from( document.querySelectorAll(className) ).filter( region => isInViewPort(region)(mainNavHeight) )[0];

export const isAtEndOfPage = () => ( (window.innerHeight + Math.ceil(window.pageYOffset) ) >= document.body.offsetHeight ) ? true : false;


// rect.top >= 0 &&
// rect.left >= 0 &&
// rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
// rect.right <= ( window.innerWidth || document.documentElement.clientWidth )


/*

  let windowHeight = ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) );

  In Full View:
    if (rect.top <= 0 && rect.bottom <= windowHeight)

  Coming Into View and still not reached bottom
    if ( (rect.top > 0 && rect.top <= windowHeight ) && rect.bottom > windowHeight )

  Scrolled Past beginning but still in view not reached bottom:
    if ( rect.top < 0 && rect.bottom >= windowHeight )

  Scrolled past beginning and bottom is in view:
    if ( rect.top < 0 && (rect.bottom <= windowHeight && rect.bottom > 0 ))

  Completely scrolled past, out of view:
    if ( rect.top < 0 && rect.bottom < 0 )

  Way Down Page, not yet in view:
    if (rect.top > windowHeight && rect.bottom > windowHeight )


  windowHeightat I need the main nav to react to:

    - determine if it is covered by a light or dark section
    - the section of the view port needs to be the 'hot spot' is the hight of the main nav
    - so all of the above logic needs to be in respect to the 'hot spot' section


*/

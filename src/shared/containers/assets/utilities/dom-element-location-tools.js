import { scrollToTopOfSection } from '../../../utilities/tweens/color-tween';

const isInHotSpot = (el) => (mainNavHeight) => {
  // console.log('el: ', el);
  let rect = el.getBoundingClientRect();

/*
  // console.log( 'rect.top: ', rect.top );
  // console.log( 'window.innerHeight: ', window.innerHeight );
  // console.log( 'rect.bottom: ', rect.bottom );
  // console.log('-------------------------------------------------');
*/

  // let windowHeight = ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) );
  let hotSpot = 80;

/*
  // console.log('windowHeight: ', windowHeight);

  // const isInFullView = () => (rect.top <= 0 && (rect.bottom <= windowHeight && rect.bottom > 0) ) ? true : false;
  // const topInViewNotReachedBottom = () => ( (rect.top > 0 && rect.top <= windowHeight ) && rect.bottom > windowHeight ) ? true : false;
  // const scrolledPastBeginBottomNotInView = () => ( rect.top < 0 && rect.bottom >= windowHeight ) ? true : false;
  // const scrolledPastBeginBottomInView = () => ( rect.top < 0 && (rect.bottom <= windowHeight && rect.bottom > 0 )) ? true : false;
  // const scrolledPastCompletely = () => ( rect.top < 0 && rect.bottom < 0 ) ? true : false;
  // const notScrolledIntoViewYet = () => (rect.top > windowHeight && rect.bottom > windowHeight ) ? true : false;

*/

/*
  // const isInFullView = () => (rect.top <= 0 && (rect.bottom <= hotSpot && rect.bottom > 0) ) ? true : false;
  // const scrolledPastCompletely = () => ( rect.top < 0 && rect.bottom < 0 ) ? true : false;
  // const notScrolledIntoViewYet = () => (rect.top > hotSpot && rect.bottom > hotSpot ) ? true : false;
*/

  const topInViewNotReachedBottom = () => ( (rect.top > 0 && rect.top <= hotSpot ) && rect.bottom > hotSpot ) ? true : false;
  const scrolledPastBeginBottomNotInView = () => ( rect.top < 0 && rect.bottom >= hotSpot ) ? true : false;
  const scrolledPastBeginBottomInView = () => ( rect.top < 0 && (rect.bottom <= hotSpot && rect.bottom > 0 )) ? true : false;

/*
  console.log('-------------------------------------------------');
  console.log( 'rect.top: ', rect.top );
  console.log( 'rect.bottom: ', rect.bottom );
  console.log('                                                  ');
  console.log('topInViewNotReachedBottom: ', topInViewNotReachedBottom());
  console.log('scrolledPastBeginBottomNotInView: ', scrolledPastBeginBottomNotInView());
  console.log('scrolledPastBeginBottomInView: ', scrolledPastBeginBottomInView());
  console.log('-------------------------------------------------');
*/
  /*

  // console.log('isInFullView: ', isInFullView());
  // console.log('scrolledPastCompletely: ', scrolledPastCompletely());
  // console.log('notScrolledIntoViewYet: ', notScrolledIntoViewYet());

  */

  // if ( topInViewNotReachedBottom() ) console.log('el topInViewNotReachedBottom: ', el);
  // if ( scrolledPastBeginBottomNotInView() ) console.log('el scrolledPastBeginBottomNotInView: ', el);
  // if ( scrolledPastBeginBottomInView() ) console.log('el scrolledPastBeginBottomInView: ', el);


  // if ( scrolledPastBeginBottomNotInView() && topInViewNotReachedBottom() ) {
    if (topInViewNotReachedBottom()) {
      // console.log('el where need to scroll to: ', el);
      scrollToTopOfSection(el);
    }
  // }

  return (
    // rect.bottom <= ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) ) && rect.bottom >= mainNavHeight
    rect.top <= hotSpot && rect.bottom >= hotSpot
  );
};

export const locateElAtTop = (className) => (mainNavHeight) => Array.from( document.querySelectorAll(className) ).filter( region => isInHotSpot(region)(mainNavHeight) )[0];

export const isAtEndOfPage = () => ( (window.innerHeight + Math.ceil(window.pageYOffset) ) >= document.body.offsetHeight ) ? true : false;

/*

  hotSpot region I need the main nav to react to:

    - determine if it is covered by a light or dark section
    - so all of the above logic needs to be in respect to the 'hot spot' section

*/

/*

// rect.top >= 0 &&
// rect.left >= 0 &&
// rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
// rect.right <= ( window.innerWidth || document.documentElement.clientWidth )

*/

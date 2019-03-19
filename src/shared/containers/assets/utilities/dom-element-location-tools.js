export const locateElAtTop = (className) => (mainNavHeight) => Array.from( document.querySelectorAll(className) ).filter( region => isInViewPort(region)(mainNavHeight) )[0];

export const isInViewPort = (el) => (mainNavHeight) => {
  let rect = el.getBoundingClientRect();

  return (
    rect.bottom <= ( window.innerHeight + (mainNavHeight / 2) || document.documentElement.clientHeight + (mainNavHeight / 2) ) &&
    rect.bottom >= mainNavHeight
  );
};

export const isAtEndOfPage = () => ( (window.innerHeight + Math.ceil(window.pageYOffset) ) >= document.body.offsetHeight ) ? true : false;


// rect.top >= 0 &&
// rect.left >= 0 &&
// rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
// rect.right <= ( window.innerWidth || document.documentElement.clientWidth )

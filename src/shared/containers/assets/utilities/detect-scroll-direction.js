let lastScrollTop = 0

export const detectScrollDirection = () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let result = (st > lastScrollTop) ? 'down' : 'up';
  lastScrollTop = (st <= 0) ? 0 : st;

  return result;
};

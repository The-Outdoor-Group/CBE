import _debounce from 'lodash/debounce';
import isWindowSizeMobile from '../isWindowSizeMobile';

import React, { useEffect, useState } from 'react';

export const useResize = (el) => {

  const [domEl, setDomEl] = useState(el);
  const [width, setWidth] = useState(domEl.innerWidth);
  const [isMobile, setIsMobile] = useState(null);

  domEl.innerWidth !== width ? setWidth(domEl.innerWidth) : width;

  useEffect(() => {

    const handleResize = () => setIsMobile( !!isWindowSizeMobile() );
    const debouncedResize = _debounce(handleResize, 500);

    domEl.addEventListener('resize', debouncedResize);
    handleResize();

    return () => domEl.removeEventListener('resize', debouncedResize);
  });

  return isMobile;
};

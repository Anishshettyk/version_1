import { useState, useEffect } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

const scrollDirectionUse = ({ direction, thresholdpx, off } = {}) => {
  const [scrollDirection, setScrollDirection] = useState(direction);

  useEffect(() => {
    const threshold = thresholdpx || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScoll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    !off ? window.addEventListener('scroll', onScoll) : setScrollDirection(direction);

    return () => window.removeEventListener('scroll', onScoll);
  }, [direction, thresholdpx, off]);

  return scrollDirection;
};

export default scrollDirectionUse;

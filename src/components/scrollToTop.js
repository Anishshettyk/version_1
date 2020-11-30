import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fixed } from '@components';
import { FaArrowCircleUp } from 'react-icons/fa';
//https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

const ScrollToTop = ({ home }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScroll);

  return (
    <Fixed home={home} orientation="right">
      <FaArrowCircleUp
        className="scrollTopIcon"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'block' : 'none' }}
      />
    </Fixed>
  );
};

ScrollToTop.propTypes = {
  home: PropTypes.bool,
};

export default ScrollToTop;

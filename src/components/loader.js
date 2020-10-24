import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconLogo } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixin.flex_center};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  z-index: 100;
  overflow: hidden;
`;
const Pulse = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: var(--loader-color);
  border-radius: 50%;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--loader-color);
    border-radius: 50%;
    display: inline-block;
    width: 100%;
    height: 100%;
    animation: pulse 3s linear infinite;
    animation-delay: calc(-0.5s * var(--delay));
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    50% {
      transform: scale(2);
      opacity: 0.3;
    }
    90% {
      transform: scale(3);
      opacity: 0.1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -41%);

    svg {
      width: 128px;
      height: 128px;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    finishLoading();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader isMounted={isMounted} className="loader">
      <Pulse>
        <span style={{ '--delay': 1 }}></span>
        <span style={{ '--delay': 2 }}></span>
        <span style={{ '--delay': 3 }}></span>
        <span style={{ '--delay': 4 }}></span>
        <span style={{ '--delay': 5 }}></span>
        <span style={{ '--delay': 6 }}></span>
        <div className="icon">
          <IconLogo />
        </div>
      </Pulse>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;

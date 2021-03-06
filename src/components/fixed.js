import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: ${props => (props.orientation === 'left' ? '0px' : '20px')};
  left: ${props => (props.orientation === 'left' ? '30px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '30px')};
  z-index: 10;
  color: var(--blue);

  @media (max-width: 1080px) {
    bottom: ${props => (props.orientation === 'left' ? '0px' : '10px')};
    left: ${props => (props.orientation === 'left' ? '10px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '10px')};
  }

  @media (max-width: 768px) {
    display: ${props => (props.orientation === 'left' ? 'none' : 'block')};
  }
`;

const Fixed = ({ home, orientation, children }) => {
  const [isMounted, setIsMounted] = useState(!home);
  const loaderDelay = 1500;

  useEffect(() => {
    if (!home) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <StyledSideElement orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={home ? 'fade' : ''} timeout={loaderDelay}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSideElement>
  );
};

Fixed.propTypes = {
  home: PropTypes.bool,
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string.isRequired,
};

export default Fixed;

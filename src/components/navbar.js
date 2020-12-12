import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { scrollDirectionUse } from '@hooks';
import { IconLogo } from '@components/icons';
import { Menu } from '@components';
import { Links } from '../stableData/data_web';

const HeaderStyled = styled.header`
  ${({ theme }) => theme.mixin.flex_between}
  position: fixed;
  height: var(--nav-height);
  width: 100%;
  top: 0;
  background-color: var(--black);
  padding: 0px 50px;
  z-index: 100;
  backdrop-filter: blur(10px);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);

  ${props =>
    props.setScrollDirection === 'up' &&
    !props.scrollToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: var(--navy);
      opacity: 0.95;
      box-shadow: 0 10px 30px -10px var(--navy);
    `};

  ${props =>
    props.setScrollDirection === 'down' &&
    !props.scrollToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--navy);
    `};
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixin.flex_between}
  position: relative;
  font-family: var(--font-rob);
  z-index: 11;
  .logo {
    ${({ theme }) => theme.mixin.flex_center};
    transition: none;
    a {
      margin-top: 17px;
      #logo {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
const StyledLinks = styled.div`
  ${({ theme }) => theme.mixin.flex_center}

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    ${({ theme }) => theme.mixin.flex_between}
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fs-s);

      a {
        padding: 10px 10px 0px 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 900;
        position: relative;
        display: block;
        color: var(--white-lightest);
        transition: var(--transition);

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--blue);
          visibility: hidden;
          width: 0px;
          transition: all 0.3s ease-in-out 0s;
        }

        &:hover {
          &:before {
            visibility: visible;
            width: 100%;
          }
        }
      }
    }
  }
  .resumeButton {
    ${({ theme }) => theme.mixin.smallButton}
    margin-top: 7px;
    margin-left: 5px;
    font-weight: 900;
  }
`;

const Navbar = ({ home }) => {
  const [isMounted, setIsMounted] = useState(!home);
  const scrollDirection = scrollDirectionUse('down');
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    setScrollToTop(window.pageYOffset < 10);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const loaderDelay = 1500;
  const timeout = loaderDelay;
  const classFade = 'fade';
  const classFadeDown = 'fadedown';

  return (
    <HeaderStyled setScrollDirection={scrollDirection} scrollToTop={scrollToTop}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={classFade} timeout={timeout}>
              <div className="logo">
                {home ? (
                  <a href="/" aria-label="home">
                    <IconLogo />
                  </a>
                ) : (
                  <Link to="/" aria-label="home">
                    <IconLogo />
                  </Link>
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
      <StyledLinks>
        <ul>
          <TransitionGroup component={null}>
            {isMounted &&
              Links &&
              Links.map(({ name, url }, i) => (
                <CSSTransition key={i} classNames={classFadeDown} timeout={timeout}>
                  <li key={i} style={{ transitionDelay: `${home ? i * 100 : 0}ms` }}>
                    <Link to={url}>{name}</Link>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ul>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={classFadeDown} timeout={timeout}>
              <div style={{ transitionDelay: `${home ? Links.length * 100 : 0}ms` }}>
                <a
                  href="/resume.pdf"
                  className="resumeButton"
                  target="_blank"
                  rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledLinks>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fadeClass" timeout={timeout}>
            <Menu />
          </CSSTransition>
        )}
      </TransitionGroup>
    </HeaderStyled>
  );
};

Navbar.propTypes = {
  home: PropTypes.bool,
};

export default Navbar;

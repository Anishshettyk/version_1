import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { window } from 'browser-monads';
import { Links, SocialMedia } from './../stableData/data_web';
import { Icon } from '@components/icons';
import { useOnClickOutside } from '@hooks';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixin.flex_center};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: none;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham__container {
    display: inline-block;
    position: relative;
    width: var(--ham-width);
    height: 24px;
  }

  .ham__container__inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--ham-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--blue);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: auto;
      right: 0;
      height: 2px;
      width: var(--ham-width);
      border-radius: var(--border-radius);
      background-color: var(--blue);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--hba)' : 'var(--hb)')};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--haa)' : 'var(--ha)')};
    }
  }
`;
const StyledSideBar = styled.div`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixin.flex_center};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: calc(100vh + var(--nav-height));
    width: min(70vw, 400px);
    outline: none;
    background-color: var(--black);
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    ${({ theme }) => theme.mixin.flex_between};
    width: 100%;
    flex-direction: column;
    text-align: center;
    ul.nav-links {
      width: 100%;
      li {
        position: relative;
        margin: 0 auto 20px;

        a {
          position: relative;
          color: var(--white-lightest);
          letter-spacing: 1px;
          text-transform: uppercase;
          width: 100%;
          padding: 3px 20px 20px;
          transition: var(--transition);
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0;
            background-color: var(--red-dark);
            transition: var(--transition);
          }
          &:hover,
          &:focus,
          &:active {
            &:before {
              width: 100%;
              height: 2px;
            }
            color: var(--blue-hover);
          }
        }

        @media (max-width: 600px) {
          margin: 0 auto 10px;
        }
      }
    }
    ul.nav-social {
      margin-top: 5vh;
      ${({ theme }) => theme.mixin.flex_between};
      li {
        margin: 3px;
        a {
          padding: 10px;
          border-radius: 50%;
          border: 2px solid var(--white);
          svg {
            width: 25px;
            height: 25px;
          }
          &:hover,
          &:focus,
          &:active {
            border-color: var(--blue-hover);
            transform: translateY(-3px);
            background-color: var(--navy);
          }
        }
      }
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixin.smallButton};
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  // let menuFocus;
  // // let firstFocus;
  // // let lastFocus;

  // const setFocus = () => {
  //   menuFocus = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
  //   // firstFocus = menuFocus[0];
  //   // lastFocus = menuFocus[menuFocus.length - 1];
  // };

  const onResize = e => {
    if (e.target.innerWidth > 768) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
    // setFocus();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleMenu}
          ref={buttonRef}
          menuOpen={menuOpen}
          aria-label="Open sidebar">
          <div className="ham__container">
            <div className="ham__container__inner"></div>
          </div>
        </StyledHamburgerButton>
        <StyledSideBar menuOpen={menuOpen}>
          <nav ref={navRef}>
            {Links && (
              <ul className="nav-links">
                {Links &&
                  Links.map(({ name, url }, i) => (
                    <li key={i}>
                      <Link to={url} onClick={toggleMenu}>
                        {name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
            <a href="/resume.pdf" className="resume-link" onClick={toggleMenu}>
              Resume
            </a>
            <ul className="nav-social">
              {SocialMedia &&
                SocialMedia.map(({ name, url }, i) => (
                  <li key={i}>
                    <a href={url} aria-label={name}>
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </StyledSideBar>
      </div>
    </StyledMenu>
  );
};

export default Menu;

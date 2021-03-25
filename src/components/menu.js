import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { window } from 'browser-monads';
import { Links, SocialMedia } from './../stableData/data_web';
import { Icon } from '@components/icons';
import { useOnClickOutside } from '@hooks';
import { motion } from 'framer-motion';

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
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.mixin.flex_center};
    flex-direction: column;
    text-align: center;
    ul.nav-links {
      position: absolute;
      top: 100px;
      li {
        a {
          margin: 20px;
          display: flex;
          align-items: center;
          div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            flex: 40px 0;
            margin-right: 20px;
            svg {
              width: 20px;
              color: white;
            }
          }
          span {
            border-radius: 15px;
            width: 200px;
            height: 30px;
            flex: 1;
            color: white;
            font-weight: 300;
            letter-spacing: 1px;
          }
        }
      }
    }
    .nav-social-container {
      position: absolute;
      top: 500px;
      p {
        margin-bottom: 20px;
        color: var(--white-lightest);
        font-weight: 300;
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--white);
      }
      ul.nav-social {
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
  }

  .resume-link {
    position: absolute;
    top: 380px;
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

  const colors = ['#fc5664', '#ffc371', '#00dea1', '#9C1AFF'];

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
                    <motion.li key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link to={url} onClick={toggleMenu}>
                        <div style={{ border: `2px solid ${colors[i]}` }}>
                          <Icon name={name} />
                        </div>
                        <span style={{ border: `2px solid ${colors[i]}` }}>{name}</span>
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            )}
            <a href="/resume.pdf" className="resume-link" onClick={toggleMenu}>
              Resume
            </a>
            <div className="nav-social-container">
              <p>Follow me at</p>
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
            </div>
          </nav>
        </StyledSideBar>
      </div>
    </StyledMenu>
  );
};

export default Menu;

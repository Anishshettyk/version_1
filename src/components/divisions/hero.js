import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navbarDelay, LoaderDelay } from '@utils';
import CircleSvg from './../../stableData/svgs/circle';
import SquareSvg from './../../stableData/svgs/square';

const StyledHeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 10vh 0 0 0;
  ${({ theme }) => theme.mixin.flex_center};
  overflow: hidden;
  &:after {
    content: 'Developer';
    position: absolute;
    font-size: clamp(var(--fs-heavy-less), 20vh, var(--fs-heavy-more));
    font-weight: 900;
    color: var(--white-dark);
    opacity: 0.2;
    bottom: 35%;
    right: -17%;
    transform: rotate(90deg);
    z-index: 2;
    margin: 0 auto;
    @media (${({ theme }) => theme.bp.desktopM}) {
      right: -25%;
    }
    @media (${({ theme }) => theme.bp.desktopXS}) {
      right: -33%;
    }
    @media (${({ theme }) => theme.bp.tabletS}) {
      display: none;
    }
  }

  .shapeContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .heroCirclesvg {
      animation: circleRotate 5s linear infinite;
    }
    .heroCirclesvg0 {
      position: inherit;
      top: 2%;
      left: -2%;
      width: 15vw;
      @media (${({ theme }) => theme.bp.mobileL}) {
        width: 30vw;
      }
    }
    .heroCirclesvg1 {
      position: inherit;
      top: 90%;
      left: 50%;
      width: 14vw;
      @media (${({ theme }) => theme.bp.mobileL}) {
        width: 30vw;
        top: 90%;
        left: 75%;
      }
    }
    .heroCirclesvg2 {
      position: inherit;
      top: 10%;
      left: 80%;
      width: 2vw;
    }
    .heroCirclesvg3 {
      position: inherit;
      top: 20%;
      left: 60%;
      width: 20vw;
    }
    @keyframes circleRotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .heroSquaresvg {
      animation: squareMove 90s linear infinite;
    }
    .heroSquaresvg0 {
      position: inherit;
      top: 90%;
      left: 0%;
      width: 15vw;
      opacity: 0.8;
    }
    .heroSquaresvg1 {
      position: inherit;
      top: 20%;
      left: 40%;
      width: 5vw;
      opacity: 1;
    }
    .heroSquaresvg2 {
      position: inherit;
      top: 70%;
      left: 80%;
      width: 7vw;
      opacity: 0.7;
    }
    .heroSquaresvg3 {
      position: inherit;
      top: 70%;
      left: 40%;
      width: 3vw;
      opacity: 0.3;
    }
    @keyframes squareMove {
      0% {
        transform: translateY(0px);
      }
      25% {
        transform: translateY(-200px);
      }
      50% {
        transform: translateY(0px);
      }
      75% {
        transform: translateY(200px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
  .heroContentContainer {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 5vw;
    ${({ theme }) => theme.mixin.flex_column};
    align-items: flex-start;
    z-index: 3;
    h3 {
      position: relative;
      margin: 0 0 10px 50px;
      font-size: clamp(var(--fs-xxs), 5vw, var(--fs-xs));
      font-family: var(--font-rob);
      font-weight: 900;
      letter-spacing: 1.2px;
      color: var(--blue);
      @media (max-width: 480px) {
        margin: 0 0 20px 2px;
      }
    }
    h1 {
      margin-left: 20px;
      letter-spacing: 3px;
      position: relative;
      span {
        color: var(--blue-hover);
      }
      @media (max-width: 480px) {
        margin-left: 2px;
      }
    }
    h2 {
      margin-left: 20px;
      color: var(--white-dark);
      position: relative;
      span {
        color: var(--blue-hover);
      }
      @media (max-width: 480px) {
        margin-left: 2px;
      }
    }
    .button-container {
      ${({ theme }) => theme.mixin.flex_center};
      margin-top: 2vh;
      .hero-button {
        display: block;
        ${({ theme }) => theme.mixin.smallButton}
        ${({ theme }) => theme.mixin.flex_center}
        text-transform: uppercase;
        box-shadow: none;
        margin: 20px;
        text-align: center;
        letter-spacing: 1.5px;
        &:hover,
        &:active {
          box-shadow: 5px 5px 10px 1px var(--blue-inside);
          font-weight: bold;
        }
        @media (max-width: 480px) {
          margin-left: 2px;
          font-size: var(--fs-vxs);
          margin: 10px;
        }
      }
    }
  }
`;

const greeting = <h3>Hi my name is,</h3>;
const name = (
  <h1 className="big-heading">
    Anish shetty k<span>.</span>
  </h1>
);
const work = (
  <h2 className="medium-heading">
    I am a frontend developer<span>.</span>
  </h2>
);

const totals = [greeting, name, work];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  });

  const circles = [];
  for (let i = 0; i < 4; i++) {
    circles.push(<CircleSvg />);
  }
  const squares = [];
  for (let i = 0; i < 4; i++) {
    squares.push(<SquareSvg />);
  }

  return (
    <StyledHeroContainer>
      <div className="shapeContainer">
        {isMounted &&
          circles.map((circle, i) => (
            <div key={i} className={`heroCirclesvg heroCirclesvg${i}`}>
              {circle}
            </div>
          ))}
        {isMounted &&
          squares.map((square, i) => (
            <div key={i} className={`heroSquaresvg heroSquaresvg${i}`}>
              {square}
            </div>
          ))}
      </div>
      <div className="heroContentContainer">
        <TransitionGroup component={null}>
          {isMounted &&
            totals.map((total, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={LoaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{total}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fadeup" timeout={LoaderDelay}>
              <div className="button-container">
                <a href="/about" className="hero-button">
                  more about me
                </a>
                <a href="/contact" className="hero-button">
                  contact me
                </a>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </StyledHeroContainer>
  );
};

export default Hero;

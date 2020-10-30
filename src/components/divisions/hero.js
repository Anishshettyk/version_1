import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navbarDelay, LoaderDelay } from '@utils';
import { Blob } from '@blobs';
import { HeroBlob } from './../../stableData/data_web';

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
    color: var(--line-color);
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

  .blobContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.6;
    animation: changeBlob 22s linear infinite;
    #blobcirclesvg {
      position: inherit;
      width: 20vw;
      top: -10%;
      left: 60%;
      opacity: 1;
    }
    #BlobheaderOutlineBottom {
      position: inherit;
      width: 40vw;
      top: 35%;
      left: -20%;
    }
    #BlobheaderTop {
      position: inherit;
      width: 40vw;
      top: -50%;
      left: 20%;
    }
    #BlobHeaderCircleOutline {
      position: inherit;
      width: 10vw;
      top: 25%;
      left: 30%;
    }
    #BlobHeaderSide {
      position: inherit;
      width: 30vw;
      bottom: -35%;
      right: -15%;
      opacity: 0.5;
    }
    @keyframes changeBlob {
      0% {
        transform: translateX(0px) rotate3d(1, 1, 1, 0deg);
      }
      25% {
        transform: translateX(13px) rotate3d(2, 2, 2, 2deg);
      }
      50% {
        transform: translateX(0px) rotate3d(1, 1, 1, 0deg);
      }
      75% {
        transform: translateX(-13px) rotate3d(2, 2, 2, -2deg);
      }
      100% {
        transform: translateX(0px) rotate3d(1, 1, 1, 0deg);
      }
    }
  }
  .heroContentContainer {
    position: relative;
    width: 100%;
    height: 100%;
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

  return (
    <StyledHeroContainer>
      <div className="blobContainer">
        {HeroBlob && HeroBlob.map(({ name }, i) => <Blob name={name} key={i} />)}
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
      </div>
    </StyledHeroContainer>
  );
};

export default Hero;

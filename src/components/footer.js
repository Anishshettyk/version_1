import React from 'react';
import styled from 'styled-components';
import { IconLogo, ReactIcon, GatsbyIcon, Icon } from '@components/icons';
import { SocialMedia } from './../stableData/data_web';
import FooterWaveSvg from './../stableData/svgs/waveFooter.svg';

const StyledFooter = styled.footer`
  min-height: 20vh;
  width: 100%;
  overflow: hidden;
  padding: 10px;
  background-image: url(${FooterWaveSvg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-color: var(--navy);
`;
const StyledRelativeFooter = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixin.flex_center}

  @media (max-width:768px) {
    ${({ theme }) => theme.mixin.flex_column}
  }
`;
const SocialContainer = styled.div`
  width: 50%;
  ${({ theme }) => theme.mixin.flex_center}

  ul {
    position: relative;
    ${({ theme }) => theme.mixin.flex_center}

    li {
      margin: 10px;

      a {
        ${({ theme }) => theme.mixin.flex_center}
        padding: 10px;
        background-color: transparent;
        border: 2px solid var(--white);
        border-radius: 50%;
        transition: var(--transition);
        &:hover,
        &:focus {
          transform: scale(1.05);
          border-color: var(--blue);
          svg {
            transform: translateY(-2px);
          }
        }

        svg {
          transition: var(--transition);
          width: 1.3rem;
          height: 1.3rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LogoContainer = styled.div`
  ${({ theme }) => theme.mixin.flex_column}
  width: 25%;

  svg {
    width: 100px;
    height: 100px;
  }
  h3 {
    font-family: var(--font-lob);
    font-size: var(--fs-xl);
  }
  p {
    font-size: var(--fs-m);
    color: var(--white);
    font-style: oblique;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TechUsedContainer = styled.div`
  ${({ theme }) => theme.mixin.flex_center}
  width: 50%;
  p {
    color: var(--white);
    letter-spacing: 1px;
    font-weight: bolder;
  }
  svg {
    margin: 5px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledRelativeFooter>
      <SocialContainer>
        <ul>
          {SocialMedia &&
            SocialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name}></Icon>
                </a>
              </li>
            ))}
        </ul>
      </SocialContainer>
      <LogoContainer>
        <IconLogo />
        <h3>Anish shetty k</h3>
        <p>&#169; 2020</p>
      </LogoContainer>
      <TechUsedContainer>
        <p>
          Built with <ReactIcon /> <GatsbyIcon /> and love.
        </p>
      </TechUsedContainer>
    </StyledRelativeFooter>
  </StyledFooter>
);

export default Footer;

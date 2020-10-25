import React from 'react';
import styled from 'styled-components';
import { IconLogo, ReactIcon, GatsbyIcon, Icon } from '@components/icons';
import { SocialMedia } from './../stableData/data_web';

const StyledFooter = styled.footer`
  min-height: 10vh;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: var(--black); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    var(--black),
    var(--navy),
    var(--black)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    var(--black),
    var(--navy),
    var(--black)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const StyledRelativeFooter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
        &:hover,
        &:focus {
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
    text-decoration: underline;
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

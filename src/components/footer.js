import React from 'react';
import styled from 'styled-components';
import { IconLogo, ReactIcon, GatsbyIcon } from '@components/icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixin.flex_column}
  position: absolute;
  min-height: 10vh;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
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

  &:before {
    position: absolute;
    content: 'Anish';
    top: 0;
    left: -100px;
    opacity: 0.1;
    transform: rotate(-90deg);
    font-size: var(--fs-heavy);
    color: var(--line-color);
    font-weight: 900;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: 'Shetty';
    top: 90px;
    right: -100px;
    opacity: 0.1;
    transform: rotate(-270deg);
    font-size: var(--fs-heavy);
    color: var(--line-color);
    font-weight: 900;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FooterContent = styled.div`
  max-width: 80%;
  ${({ theme }) => theme.mixin.flex_column}

  .main-content {
    ${({ theme }) => theme.mixin.flex_center}

    svg {
      margin-top: 10px;
      display: inline-block;
      width: 100px;
    }

    h2 {
      font-family: var(--font-lob);
      letter-spacing: 2px;
      position: relative;

      &:before {
        position: absolute;
        content: '';
        width: 5px;
        height: 40px;
        background-color: var(--blue);
        margin-left: -10px;
      }
    }
  }

  .copyright {
    ${({ theme }) => theme.mixin.flex_column}

    .year {
      font-weight: bold;
      color: var(--blue-hover);
      margin-bottom: 5px;
    }

    .rights {
      text-transform: uppercase;
      color: var(--white-dark);
      font-style: oblique;
    }
  }
`;
const TechUsed = styled.div`
  background-color: var(--black);
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  height: 5vh;
  text-align: center;
  ${({ theme }) => theme.mixin.flex_center}

  span {
    width: 100%;

    svg {
      margin-left: 5px;
      width: 16px;
      height: 16px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <div className="main-content">
        <IconLogo />
        <h2>Anish shetty k</h2>
      </div>
      <div className="copyright">
        <p className="year">&#169; 2020</p>
        <p className="rights">all rights reserved</p>
      </div>
    </FooterContent>
    <TechUsed>
      <span>
        Built with <ReactIcon /> <GatsbyIcon /> and 💖💖
      </span>
    </TechUsed>
  </StyledFooter>
);

export default Footer;

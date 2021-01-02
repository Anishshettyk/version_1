import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import contactBannerBg from './../../images/contactBannerBg.jpg';
import sr from '@utils/sr';
import { srConfig } from './../../config';

const StyledBanner = styled.section`
  position: relative;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--border-radius);
  padding: 10px 30px;
  z-index: 1;
  ${({ theme }) => theme.mixin.flex_between}
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: var(--blue-overlay);
  }

  .contactMeBanner__headingContainer {
    h2 {
      color: var(--blue);
      letter-spacing: 1px;
    }
    h5 {
      color: var(--white-lightest);
      letter-spacing: 0.5px;
    }
  }
  a {
    padding: 10px 20px;
    background: transparent;
    border-radius: 30px;
    color: var(--white-lightest);
    border: 2px solid var(--blue);
    transition: var(--transition);
    line-height: 1;
    &:hover {
      background-color: var(--blue);
      color: var(--blue-inside);
    }
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    ${({ theme }) => theme.mixin.flex_column}
    align-items: flex-start;
    padding: 25px 10px;
    .contactMeBanner__headingContainer {
      h2 {
        font-size: var(--fs-l);
      }
      h5 {
        font-size: var(--fs-xxs);
      }
    }
    a {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: var(--fs-xs);
    }
  }
`;

const ContactMeBanner = () => {
  const revealSection = useRef(null);

  useEffect(() => {
    sr.reveal(revealSection.current, srConfig());
  }, []);

  return (
    <StyledBanner background={contactBannerBg} ref={revealSection}>
      <div className="contactMeBanner__headingContainer">
        <h2>
          I'm Available <br />
          for Intership work & Freelancer projects!
        </h2>
        <h5>Feel free to share your project ideas.</h5>
      </div>
      <a href="/contact">Contact me</a>
    </StyledBanner>
  );
};

export default ContactMeBanner;

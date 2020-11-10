import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Heading } from '@components';

const AboutMeContainer = styled.div`
  min-height: 100vh;
`;
const ContentContainer = styled.div`
  margin-top: 6vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;
const AboutMePhotoContainer = styled.div`
  position: relative;
  max-width: 400px;
  transition: var(--transition);

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixin.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--image-cover);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before {
        top: -30px;
        left: -30px;
      }
      &:after {
        bottom: -20px;
        right: -20px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
      .wrapper__content {
        display: block;
        transform: translateY(0px);
        visibility: visible;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(20%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      transition: var(--transition);
    }

    &:before {
      background: linear-gradient(to top, var(--red-dark), var(--yellow-dark));
      top: -40px;
      left: -40px;
      z-index: -1;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    &:after {
      background: linear-gradient(to bottom, var(--blue), var(--blue-hover));
      bottom: -30px;
      right: -30px;
      z-index: -1;
      width: 100px;
      height: 100px;
    }
    .wrapper__content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--navy);
      transform: translateY(1px);
      visibility: hidden;
      display: none;
      transition: var(--transition);

      h3 {
        text-align: center;
      }
    }
  }
`;
const AboutMeContentContainer = styled.div``;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      me: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#0f3460" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <AboutMeContainer>
      <Heading data="About Me" />
      <ContentContainer>
        <AboutMePhotoContainer>
          <div className="wrapper">
            <Img fluid={data.me.childImageSharp.fluid} alt="my photo" className="img" />
            <div className="wrapper__content">
              <h3>Anish shetty k</h3>
            </div>
          </div>
        </AboutMePhotoContainer>
        <AboutMeContentContainer></AboutMeContentContainer>
      </ContentContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

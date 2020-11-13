import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Heading } from '@components';
import { TechKnown } from './../../stableData/data_web';
import { RiCake2Line, RiUserLocationLine } from 'react-icons/ri';

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

  .my_photo {
    position: relative;
    max-width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    border: 6px solid var(--yellow-dark);
    transition: var(--transition);
  }
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 20%;
    height: 20%;
    z-index: 1;
    content: '';
    border-left: 5px solid transparent;
    border-top: 5px solid transparent;
    border-image: linear-gradient(to right, var(--red-dark) 0%, var(--yellow-dark) 100%);
    border-image-slice: 1;
    transition: var(--transition);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 20%;
    height: 20%;
    z-index: 1;
    content: '';
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(to left, var(--red-dark) 0%, var(--yellow-dark) 100%);
    border-image-slice: 1;
    transition: var(--transition);
  }
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.01);
    &:after {
      bottom: 10px;
      right: 10px;
    }
    &:before {
      top: 10px;
      left: 10px;
    }
  }

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
`;
const AboutMeContentContainer = styled.div``;
const YearInfoContainer = styled.div`
  padding-top: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--line-color-a);

  .year_info {
    ${({ theme }) => theme.mixin.flex_center};

    p {
      font-size: var(--fs-xl);
      font-weight: 900;
      color: var(--white-lightest);
      opacity: 0.8;
      line-height: 1;
      .year_info_icon {
        width: var(--fs-xxl);
        color: var(--red-dark);
        padding-right: 3px;
      }
    }
  }
  @media (${({ theme }) => theme.bp.mobileM}) {
    display: block;
    p {
      padding: 7px;
    }
  }
`;
const StyledText = styled.div`
  padding: 10px;
  p {
    letter-spacing: 0.5px;
    padding: 2px;
  }
`;
const TechKnownContainer = styled.div`
  padding: 10px;
  p {
    font-weight: bold;
    font-size: var(--fs-m);
  }
  ul {
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      padding: 2px;
      color: var(--blue-dark);
      font-style: italic;
      font-weight: 900;

      &:before {
        content: '❯';
        padding-right: 10px;
        font-size: var(--fs-m);
        color: var(--yellow-dark);
      }
    }
  }
`;

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      me: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me_ori.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const calculateAge = DOB => {
    const birthday = new Date(DOB);
    const currentDate = new Date();
    const difference = currentDate - birthday;
    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  };

  return (
    <AboutMeContainer>
      <Heading data="About me" />
      <ContentContainer>
        <AboutMePhotoContainer>
          <Img fluid={data.me.childImageSharp.fluid} alt="my photo" className="my_photo" />
        </AboutMePhotoContainer>
        <AboutMeContentContainer>
          <YearInfoContainer>
            <div className="year_info">
              <p>
                <RiCake2Line className="year_info_icon"></RiCake2Line>{' '}
                {`${calculateAge('2000/12/11')} years`}
              </p>
            </div>
            <div className="year_info">
              <p>
                <RiUserLocationLine className="year_info_icon"></RiUserLocationLine> Bangalore
              </p>
            </div>
          </YearInfoContainer>
          <StyledText>
            <p>Hello i'm Anish shetty, a software engineer based in Bangalore IND.</p>
            <p>
              I enjoy creating awesome and blazing fast websites for the web that live on the
              internet. Started web development as a time killer during college and now got
              addicted. My goal is to build products which gives best customers and performant
              experience.
            </p>
            <p>
              I am currently pursuing my B-Tech in{' '}
              <a href="http://www.msruas.ac.in/" target="_blank" rel="noopener noreferrer">
                Ramaiah university.
              </a>
            </p>
          </StyledText>
          <TechKnownContainer>
            <p>These are some of the technologies i work with,</p>
            <ul> {TechKnown && TechKnown.map(({ name }, i) => <li key={i}>{name}</li>)}</ul>
          </TechKnownContainer>
        </AboutMeContentContainer>
      </ContentContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Heading } from '@components';
import { srConfig } from './../../config';
import sr from '@utils/sr';
import { TechKnown } from './../../stableData/data_web';
import { RiCake2Line, RiUserLocationLine } from 'react-icons/ri';

const AboutMeContainer = styled.section``;
const ContentContainer = styled.div`
  margin-top: 6vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 10px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: block;
  }
`;
const AboutMePhotoContainer = styled.div`
  position: relative;
  max-width: 400px;
  transition: var(--transition);

  .my_photo {
    position: relative;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
`;
const AboutMeContentContainer = styled.div`
  @media (${({ theme }) => theme.bp.tabletL}) {
    margin-top: 3vh;
  }
  .aboutMe__buttonContainer {
    margin-top: 2vh;
    padding: 2vh 0 0 10px;
    ${({ theme }) => theme.mixin.flex_start}
    .aboutMe__button {
      ${({ theme }) => theme.mixin.smallButton}
    }
    .aboutMe__button__red {
      ${({ theme }) => theme.mixin.smallButtonRed}
    }
    a:nth-child(1) {
      margin-right: 3vw;
    }
  }
`;
const YearInfoContainer = styled.div`
  padding-top: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
  border-bottom: 3px dashed var(--line-color-a);

  .year_info {
    ${({ theme }) => theme.mixin.flex_center};

    p {
      font-size: var(--fs-m);
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
  @media (${({ theme }) => theme.bp.mobileS}) {
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
    text-decoration: underline;
    letter-spacing: 1px;
  }
  ul {
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    li {
      padding: 2px;
      color: var(--white-light);
      font-weight: 700;

      &:before {
        content: '❯';
        padding-right: 10px;
        font-size: var(--fs-m);
        color: var(--blue);
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        font-size: var(--fs-xs);
      }
      @media (${({ theme }) => theme.bp.mobileS}) {
        font-size: var(--fs-vxs);
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
  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <AboutMeContainer ref={revealContainer}>
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
              addicted. My goal is to build products which gives best user and performance
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
          <div className="aboutMe__buttonContainer">
            <a href="/aboutme" className="aboutMe__button">
              more info
            </a>
            <a href="/resume.pdf" className="aboutMe__button__red">
              view resume
            </a>
          </div>
        </AboutMeContentContainer>
      </ContentContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

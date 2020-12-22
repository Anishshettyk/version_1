import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import sr from '@utils/sr';
import { srConfig } from './../../config';

const TechKnownSection = styled.section`
  .showMore__button {
    display: block;
    margin: 30px auto;
    ${({ theme }) => theme.mixin.smallButtonRed};
  }
`;

const TechKnownStyled = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media (${({ theme }) => theme.bp.tabletL}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (${({ theme }) => theme.bp.mobileS}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const TechKnownStyledContainer = styled.div`
  width: 100%;
  height: 15vh;
  overflow: hidden;
  background-color: var(--navy);
  border-radius: var(--border-radius);
  padding: 10px 0px;
  box-shadow: var(--container-shadow);
  transition: var(--transition);
  &:hover {
    transform: translateY(-5px);
    background-color: var(--blue-inside);
  }

  .icon__wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${({ theme }) => theme.mixin.flex_column};

    .techKnown__icon {
      max-width: 80%;
      max-height: 80%;
    }
    h3 {
      color: var(--white);
      text-align: center;
      @media (${({ theme }) => theme.bp.tabletS}) {
        font-size: var(--fs-s);
      }
    }
  }
`;

const TechKnown = () => {
  const data = useStaticQuery(graphql`
    {
      tech: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutMe/" } }) {
        edges {
          node {
            frontmatter {
              icons {
                name
                publicURL
                childImageSharp {
                  fixed(width: 256, traceSVG: { color: "#16213e" }) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const techKnown = data.tech.edges.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealTechKnown = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealTechKnown.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <TechKnownSection>
      <h2 className="side-heading" ref={revealTitle}>
        Technologies i have worked with<span>,</span>
      </h2>

      <div>
        {techKnown.length &&
          techKnown.map(
            (
              {
                node: {
                  frontmatter: { icons },
                },
              },
              i,
            ) => {
              const first12 = icons.slice(0, 12);
              const iconsToShow = showMore ? icons : first12;
              return (
                <TechKnownStyled key={i} ref={element => (revealTechKnown.current[i] = element)}>
                  {iconsToShow.length &&
                    iconsToShow.map(({ name, childImageSharp: { fixed } }, i) => (
                      <TechKnownStyledContainer key={i}>
                        <div className="icon__wrapper">
                          <Img
                            fixed={fixed}
                            alt={name}
                            objectFit="contain"
                            objectPosition="50% 50%"
                            className="techKnown__icon"
                          />
                          <h3>{name}</h3>
                        </div>
                      </TechKnownStyledContainer>
                    ))}
                </TechKnownStyled>
              );
            },
          )}
      </div>
      <button className="showMore__button" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'show less' : 'show more'}
      </button>
    </TechKnownSection>
  );
};

export default TechKnown;

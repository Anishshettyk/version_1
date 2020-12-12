import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { IconLogo, ReactIcon, GatsbyIcon, Icon } from '@components/icons';
import { SocialMedia, Links, contactInfo } from './../stableData/data_web';
import { RiArrowRightSLine } from 'react-icons/ri';
const StyledFooter = styled.footer`
  background: var(--navy);
  color: var(--white);
  font-size: var(--fs-m);
  h4 {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--white-lightest);
    padding-bottom: 12px;
    border-bottom: 2px solid var(--blue);
  }
`;
const FooterTop = styled.section`
  padding: 30px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (${({ theme }) => theme.bp.tabletL}) {
    display: block;
    padding: 15px 25px;
  }
  .footer__me {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      padding-left: 25px;
      svg {
        width: 80px;
        height: 80px;
      }
      h3 {
        color: var(--white-lightest);
        font-size: var(--fs-xxl);
        line-height: 1;
        letter-spacing: 1px;
        @media (${({ theme }) => theme.bp.mobileL}) {
          font-size: var(--fs-m);
        }
      }
      @media (${({ theme }) => theme.bp.tabletL}) {
        padding-left: 0;
      }
    }
    p {
      margin: 0 0 0 10%;
      line-height: 24px;
      color: var(--white);
      letter-spacing: 0.5px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      p {
        margin: 0;
      }
    }
  }
  .footer__links {
    ul {
      li {
        border-bottom: 1px solid var(--white-dark-a);
        padding: 10px 0;
        &:first-child {
          padding-top: 0;
        }
        .footer__links__icon {
          color: var(--blue);
          padding-right: 5px;
          font-size: var(--fs-m);
        }
        a {
          color: var(--white);
          font-size: var(--fs-s);
          &:hover {
            color: var(--blue);
          }
        }
      }
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      margin-bottom: 30px;
    }
  }
  .footer__contact {
    p {
      line-height: 26px;
      strong {
        color: var(--blue);
      }
    }
    .footer__contact_social-links {
      margin-top: 4vh;
      a {
        padding: 10px;
        display: inline-block;
        background: var(--black);
        border: 2px solid var(--white);
        line-height: 1;
        margin-right: 6px;
        border-radius: 50%;
        transition: 0.3s;
        svg {
          transition: 0.3s;
          width: 20px;
          height: 20px;
        }
        &:hover {
          border-color: var(--blue);
          transform: scale(1.03);
          svg {
            transform: translateY(-2px);
          }
        }
      }
    }
  }
`;
const FooterBottom = styled.section`
  padding: 10px 0;
  border-top: 2px dashed var(--line-color-a);
  text-align: center;
  .footer__copyright {
    color: var(--white-dark);
    font-size: var(--fs-s);
    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--fs-xxs);
    }
  }
  .footer__credits {
    padding-top: 10px;
    color: var(--white-lightest);
    svg {
      margin: 5px;
      width: 25px;
      height: 25px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: var(--fs-xs);
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterTop>
      <div className="footer__me">
        <div>
          <IconLogo className="footer__me__logo" />
          <h3>
            Anish shetty k<span className="dot__color">.</span>
          </h3>
        </div>
        <p>
          I'm a software developer based in bangalore{' '}
          <span role="img" aria-label="india-flag">
            &#127470;&#127475;
          </span>
        </p>
      </div>
      <div className="footer__links">
        <h4>useful links</h4>
        <ul>
          {Links.map((link, i) => {
            const { name, url } = link;
            return (
              <li key={i}>
                <RiArrowRightSLine className="react-icon footer__links__icon" />
                <Link to={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer__contact">
        <h4>contact me</h4>
        {contactInfo &&
          contactInfo.map((contact, i) => {
            const { name, value } = contact;
            return (
              <p key={i}>
                <strong>{name} : </strong>
                {value}
                <br />
              </p>
            );
          })}
        <div className="footer__contact_social-links">
          {SocialMedia &&
            SocialMedia.map((social, i) => {
              const { name, url } = social;
              return (
                <a key={i} href={url}>
                  <Icon name={name} />
                </a>
              );
            })}
        </div>
      </div>
    </FooterTop>
    <FooterBottom>
      <div className="footer__copyright">
        &copy; Copyright <strong>Anish shetty k</strong>. ALL RIGHTS RESERVED
      </div>
      <div className="footer__credits">
        Built by <a href="https://version-1.vercel.app">anishshettyk</a> with <ReactIcon />{' '}
        <GatsbyIcon /> and love.
      </div>
    </FooterBottom>
  </StyledFooter>
);

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import { Fixed } from '@components';
import styled from 'styled-components';
import { SocialMedia } from '../stableData/data_web';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--line-color);
    opacity: 0.3;
  }
  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 70vh;
    margin: 0 auto;
    background-color: var(--line-color);
    opacity: 0.3;
  }

  li {
    margin: 2px;
    padding: 10px;
    background-color: var(--blue-inside);
    border-radius: var(--border-radius);
    transition: var(--transition);

    a {
      svg {
        width: 25px;
        height: 25px;
      }
    }
    &:hover,
    &:focus {
      background-color: var(--blue-inside);
      transform: translateY(-3px);
      border: 1px solid var(--blue);
      a {
        transform: scale(1.05);
      }
    }
  }
`;

const Social = ({ home }) => (
  <Fixed home={home} orientation="left">
    <StyledSocialList>
      {SocialMedia &&
        SocialMedia.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name}></Icon>
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Fixed>
);

Social.propTypes = {
  home: PropTypes.bool,
};

export default Social;

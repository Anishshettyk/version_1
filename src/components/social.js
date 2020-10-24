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
    opacity: 0.6;
  }
  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 70vh;
    margin: 0 auto;
    background-color: var(--line-color);
    opacity: 0.6;
  }

  li {
    padding: 10px;

    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
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

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
    opacity: 0.2;
  }
  &:before {
    content: '';
    display: block;
    width: 2px;
    height: 70vh;
    margin: 0 auto;
    background-color: var(--line-color);
    opacity: 0.2;
  }

  li {
    margin: 5px;
    transition: var(--transition);

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover,
    &:focus {
      transform: translateY(-3px);
      a {
        transform: scale(1.05);
        outline: none;
      }
    }
  }
`;

const Social = ({ home }) => (
  <Fixed home={home} orientation="left">
    <StyledSocialList>
      {SocialMedia &&
        SocialMedia.map(({ name, url }, i) => (
          <a href={url} aria-label={name} key={i}>
            <li>
              <Icon name={name}></Icon>
            </li>
          </a>
        ))}
    </StyledSocialList>
  </Fixed>
);

Social.propTypes = {
  home: PropTypes.bool,
};

export default Social;

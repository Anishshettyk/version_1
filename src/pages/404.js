import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotFound = styled.main`
  min-height: 100vh;
  width: 100%;
  ${({ theme }) => theme.mixin.flex_column};
  h1 {
    @media (${({ theme }) => theme.bp.mobileS}) {
      font-size: var(--fs-heavy-less);
    }
  }
  h3 {
    text-transform: uppercase;
    color: var(--white-light);
    @media (${({ theme }) => theme.bp.mobileM}) {
      font-size: var(--fs-s);
    }
  }
  a {
    margin-top: 5vh;
    letter-spacing: 2px;
    ${({ theme }) => theme.mixin.bigButton};
    @media (${({ theme }) => theme.bp.mobileL}) {
      ${({ theme }) => theme.mixin.smallButton};
    }
  }
`;

const pageNotFound = ({ location }) => (
  <Layout location={location}>
    <NotFound className="insideAdjust">
      <h1 className="gradient-huge-heading">404</h1>
      <h3 className="big-heading">page not found :(</h3>
      <a href="/">Home is this way</a>
    </NotFound>
  </Layout>
);

pageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default pageNotFound;

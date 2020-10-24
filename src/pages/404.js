import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotFoundHeading = styled.h1`
  margin-top: 10vh;
  text-align: center;
`;

const pageNotFound = ({ location }) => (
  <Layout location={location}>
    <NotFoundHeading>PAGE NOT FOUND</NotFoundHeading>
  </Layout>
);

pageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default pageNotFound;

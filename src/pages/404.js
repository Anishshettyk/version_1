import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotFound = styled.main``;

const pageNotFound = ({ location }) => (
  <Layout location={location}>
    <NotFound className="insideAdjust">
      <h1>PAGE NOT FOUND</h1>
    </NotFound>
  </Layout>
);

pageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default pageNotFound;

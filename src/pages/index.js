import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';

const Styledmain = styled.main``;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Styledmain className="insideAdjust"></Styledmain>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

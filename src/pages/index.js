import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Hero } from '@components';
import styled from 'styled-components';

const Styledmain = styled.main``;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Hero />
    <Styledmain className="insideAdjust"></Styledmain>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

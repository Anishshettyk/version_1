import React from 'react';
import { Layout, Heading } from '@components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styledmain = styled.main``;

const AboutMePage = ({ location }) => (
  <Layout location={location}>
    <Styledmain className="insideAdjust">
      <Heading data="About Me" />
    </Styledmain>
  </Layout>
);

AboutMePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutMePage;

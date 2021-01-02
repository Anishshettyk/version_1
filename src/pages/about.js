import React from 'react';
import { Layout, TechKnown, ContactMeBanner } from '@components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styledmain = styled.main``;

const AboutMePage = ({ location }) => (
  <Layout location={location}>
    <Styledmain className="insideAdjust">
      <TechKnown />
      <ContactMeBanner />
    </Styledmain>
  </Layout>
);

AboutMePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutMePage;

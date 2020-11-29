import React from 'react';
import { Layout, AboutMe } from '@components';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styledmain = styled.main``;

const AboutMePage = ({ location }) => {
  const progress = 'bulid in progress';
  return (
    <Layout location={location}>
      <Styledmain className="insideAdjust">
        <AboutMe />
        <h3>{progress}</h3>
      </Styledmain>
    </Layout>
  );
};

AboutMePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AboutMePage;

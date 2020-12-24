import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import Styled from 'styled-components';

const StyledBlogContainer = Styled.main``;

const Projects = ({ location }) => (
  <Layout location={location}>
    <StyledBlogContainer className="insideAdjust">
      <h1>projects page in future</h1>
    </StyledBlogContainer>
  </Layout>
);

Projects.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Projects;

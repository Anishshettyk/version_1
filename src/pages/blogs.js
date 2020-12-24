import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import Styled from 'styled-components';

const StyledBlogContainer = Styled.main``;

const Blogs = ({ location }) => (
  <Layout location={location}>
    <StyledBlogContainer className="insideAdjust">
      <h1>blog page in future</h1>
    </StyledBlogContainer>
  </Layout>
);

Blogs.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Blogs;

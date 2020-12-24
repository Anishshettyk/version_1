import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import Styled from 'styled-components';

const StyledBlogContainer = Styled.main``;

const Contact = ({ location }) => (
  <Layout location={location}>
    <StyledBlogContainer className="insideAdjust">
      <h1>contact page in future</h1>
    </StyledBlogContainer>
  </Layout>
);

Contact.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Contact;

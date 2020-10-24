import React from 'react';
import PropTypes from 'prop-types';
import { Github, CodePen, LinkedIn, Twitter } from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'github':
      return <Github />;
    case 'codepen':
      return <CodePen />;
    case 'linkedIn':
      return <LinkedIn />;
    case 'twitter':
      return <Twitter />;
    default:
      return 'no icon found';
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

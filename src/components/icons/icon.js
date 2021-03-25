import React from 'react';
import PropTypes from 'prop-types';
import { Github, CodePen, LinkedIn, Twitter } from '@components/icons';
import { BsPersonBoundingBox, BsPencilSquare } from 'react-icons/bs';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';

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
    case 'About':
      return <BsPersonBoundingBox />;
    case 'Projects':
      return <GoProject />;
    case 'Blog':
      return <BsPencilSquare />;
    case 'Contact':
      return <FiPhoneOutgoing />;
    default:
      return 'no icon found';
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

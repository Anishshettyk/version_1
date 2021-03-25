import React from 'react';
import { Heading } from '../index';

const TopProjects = () => {
  const hello = 'hello world';
  return (
    <div>
      <Heading data="My projects" />
      <p>{hello}</p>
    </div>
  );
};

export default TopProjects;

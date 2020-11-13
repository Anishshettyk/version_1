import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  text-align: center;
  position: relative;
  letter-spacing: 2px;
  padding-bottom: 10px;

  span {
    color: var(--blue-hover);
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100px;
    height: 5px;
    background: linear-gradient(to left, var(--red-dark), var(--yellow-dark));
    bottom: 0;
    left: calc(50% - 50px);
    border-radius: var(--border-radius);
  }
  @media (${({ theme }) => theme.bp.mobileM}) {
    font-size: var(--fs-xxl);
  }
`;

const Heading = ({ data }) => (
  <StyledHeading className="small-heading">
    {data}
    <span>.</span>
  </StyledHeading>
);

Heading.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Heading;

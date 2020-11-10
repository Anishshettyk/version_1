import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  text-align: center;
  position: relative;
  letter-spacing: 3px;
  span {
    color: var(--blue-hover);
  }
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    margin-left: -20px;
    border-radius: var(--border-radius);
    width: 7px;
    height: 100%;
    background: linear-gradient(to bottom, var(--red-dark), var(--yellow-dark));
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

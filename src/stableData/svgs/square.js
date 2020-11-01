import React from 'react';

const SquareSvg = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="squareSvg">
    <defs>
      <linearGradient id="squareSvgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00adb5' }}></stop>
        <stop offset="100%" style={{ stopColor: '#00dea1' }}></stop>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="10" ry="10" fill="url(#squareSvgGradient)" />
  </svg>
);

export default SquareSvg;

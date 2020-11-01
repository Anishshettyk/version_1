import React from 'react';

const Circlesvg = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" id="cirlce svg">
    <defs>
      <linearGradient id="circleSvg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fc5664' }}></stop>
        <stop offset="100%" style={{ stopColor: '#ffc371' }}></stop>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#circleSvg)" />
  </svg>
);

export default Circlesvg;

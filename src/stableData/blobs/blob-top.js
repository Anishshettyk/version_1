import React from 'react';

const BlobheaderTop = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="BlobheaderTop">
    <defs>
      <linearGradient id="BlobheaderTopgradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00dea1' }}></stop>
        <stop offset="100%" style={{ stopColor: '#00adb5' }}></stop>
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M435,312Q398,374,330,347.5Q262,321,196.5,388.5Q131,456,115.5,380.5Q100,305,93.5,248Q87,191,114.5,126.5Q142,62,205,104Q268,146,304,160.5Q340,175,406,212.5Q472,250,435,312Z"
      fill="url(#BlobheaderTopgradient)"></path>
  </svg>
);

export default BlobheaderTop;

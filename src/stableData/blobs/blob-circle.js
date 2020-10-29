import React from 'react';

const BlobHeaderCircle = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobcirclesvg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }}></stop>
        <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M427,352.5Q368,455,248,458Q128,461,68.5,355.5Q9,250,73,152.5Q137,55,250,55Q363,55,424.5,152.5Q486,250,427,352.5Z"
      fill="url(#gradient)"></path>
  </svg>
);

export default BlobHeaderCircle;

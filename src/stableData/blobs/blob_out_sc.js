import React from 'react';

const BlobheaderOutlineBottom = () => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    id="BlobheaderOutlineBottom">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }}></stop>
        <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M436.5,315Q380,380,315,395Q250,410,192,388Q134,366,150,308Q166,250,131.5,173.5Q97,97,173.5,128.5Q250,160,280.5,174.5Q311,189,402,219.5Q493,250,436.5,315Z"
      fill="none"
      strokeWidth="10px"
      stroke="url(#gradient)"></path>
  </svg>
);

export default BlobheaderOutlineBottom;

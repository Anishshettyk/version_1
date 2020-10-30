import React from 'react';

const BlobHeaderSide = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="BlobHeaderSide">
    <defs>
      <linearGradient id="BlobHeaderSidegradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fc5664' }}></stop>
        <stop offset="100%" style={{ stopColor: '#ffc371' }}></stop>
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M381.5,295.5Q341,341,295.5,330.5Q250,320,202.5,332.5Q155,345,124,297.5Q93,250,138,216.5Q183,183,216.5,92.5Q250,2,282,94Q314,186,368,218Q422,250,381.5,295.5Z"
      fill="url(#BlobHeaderSidegradient)"></path>
  </svg>
);

export default BlobHeaderSide;

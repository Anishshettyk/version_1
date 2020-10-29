import React from 'react';

const BlobHeaderSide = () => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="BlobHeaderSide">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(2, 95, 109)' }}></stop>
        <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
      </linearGradient>
    </defs>
    <path
      id="blob"
      d="M452,293Q444,336,392.5,343.5Q341,351,331,409Q321,467,277,440Q233,413,183,432.5Q133,452,116.5,405.5Q100,359,55,330Q10,301,61.5,261Q113,221,106,181Q99,141,141.5,138.5Q184,136,207,96Q230,56,260.5,89.5Q291,123,338.5,111.5Q386,100,376.5,149Q367,198,413.5,224Q460,250,452,293Z"
      fill="url(#gradient)"></path>
  </svg>
);

export default BlobHeaderSide;

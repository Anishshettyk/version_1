import React from 'react';
import PropTypes from 'prop-types';
import {
  BlobHeaderCircle,
  BlobheaderOutlineBottom,
  BlobheaderTop,
  BlobHeaderCircleOutline,
  BlobHeaderSide,
} from '@blobs';

const Blob = ({ name }) => {
  switch (name) {
    case 'BlobHeaderCircle':
      return <BlobHeaderCircle />;
    case 'BlobheaderOutlineBottom':
      return <BlobheaderOutlineBottom />;
    case 'BlobheaderTop':
      return <BlobheaderTop />;
    case 'BlobHeaderCircleOutline':
      return <BlobHeaderCircleOutline />;
    case 'BlobHeaderSide':
      return <BlobHeaderSide />;
    default:
      return null;
  }
};

Blob.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Blob;

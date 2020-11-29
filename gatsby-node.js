const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@fonts': path.resolve(__dirname, 'src/fonts'),
          '@hooks': path.resolve(__dirname, 'src/hooks/'),
          '@blobs': path.resolve(__dirname, 'src/stableData/blobs'),
          '@utils': path.resolve(__dirname, 'src/utils/'),
        },
      },
    });
  };
};

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Anish shetty k',
    description:
      'Anish shetty k is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteUrl: 'https://anishshettyk.com', // No trailing slash allowed!
    image: '/screen.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@Anishshettyk11',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Anish shetty k',
        short_name: 'Anishshettyk',
        start_url: '/',
        background_color: config.colors.black,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Awkward Group - IT Consultants`,
    description: `Awkward Group provides senior IT consultants within Business and process development, System and Interface design, and programming.`,
    author: `@joakimstrandell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `awkward-group-website`,
        short_name: `awkward`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FCCF20`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

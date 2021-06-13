require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    description: `This is Michael Moschello's personal portfolio website showcasing what he does`,
    author: `Michael Moschello- alphonse52leo@gmail.com`,
    
    menuLinks:[
    {
      name:'home',
      link:'/'
    },
    {
      name:'building',
      link:'/building'
    },
    {
      name:'debate',
      link:'/debate'
    },
    {
      name:'about',
      link:'/about'
    }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-manifest',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      
        options: {
          name: "MMPortfolio",
          short_name: "MMPortfolio",
          start_url: "/",
          background_color: "#47597e",
          theme_color: "#ab8e0a",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
          // An optional attribute which provides support for CORS check.
          // If you do not provide a crossOrigin option, it will skip CORS for manifest.
          // Any invalid keyword or empty string defaults to `anonymous`
          crossOrigin: `use-credentials`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: `bwaodb4500hi`,
          accessToken: `WXDlski-5huTjGUoNf-w3yDbjxJ0GIRq5kZjcvSD6jM`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-theme-switcher',
      options: {
        defaultDarkTheme: 'theme-dark',
        defaultLightTheme: 'theme-light',
      },
    },
  ],

  

    
  
}

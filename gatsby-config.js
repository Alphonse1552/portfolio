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
    },
    {
      name:'contact',
      link:'/contact'
    }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alphonse5.ga`,
        short_name: `MMPortfolio`,
        start_url: `/`,
        background_color: '#47597e',
        theme_color: `#ab8e0a`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
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
    `gatsby-plugin-offline`,
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

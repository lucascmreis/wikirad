module.exports = {
  siteMetadata: {
    siteTitle: `WikiRad`,
    defaultTitle: `WikiRad`,
    siteTitleShort: `WikiRad`,
    siteDescription: `Repositório de conhecimento sobre Tecnologia Radar`,
    siteUrl: `https://wikirad.vercel.app/`,
    siteAuthor: `@lucascmreis`,
    siteImage: `/banner.png`,
    siteLanguage: `pt`,
    themeColor: `#0039b3`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WikiRad`,
        short_name: `WikiRad`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

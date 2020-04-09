module.exports = {
  siteMetadata: {
    title: 'Remote learning enablement',
    description:
      'A New Challenge for Teachers & Students. IBM has experience that can help',
    keywords: 'remote,learning,enablement,ibm',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Remote learning enablement with IBM',
        short_name: 'Remote learning enablement',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
    },
  ],
};

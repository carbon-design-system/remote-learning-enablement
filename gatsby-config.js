module.exports = {
  siteMetadata: {
    title: "Remote learning enablement",
    description:
      "A New Challenge for Teachers & Students. IBM has experience that can help",
    keywords: "remote,learning,enablement, ibm"
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser"
      }
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        repository: {
          baseUrl:
            "https://github.com/carbon-design-system/gatsby-theme-carbon",
          subDirectory: "/packages/example"
        }
      }
    }
  ]
};

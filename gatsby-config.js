// Based on https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/gatsby-config.js
module.exports = {
  siteMetadata: {
    siteName: "Dovetail",
    siteUrl: "https://dovetailapp.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typestyle",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages",
        name: "documents"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "transparent",
              quality: 75,
              maxWidth: 660,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        anonymize: true,
        head: false,
        respectDNT: true,
        trackingId: "UA-97199079-2"
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN || "",
        config: {
          environment: process.env.SENTRY_ENVIRONMENT,
          release: process.env.SENTRY_RELEASE
        }
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#512da8",
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://dovetailapp.com"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: "#ffffff",
        description:
          "Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next.",
        display: "standalone",
        icon: "./src/icon.png",
        name: "Dovetail",
        short_name: "Dovetail",
        start_url: "/projects",
        theme_color: "#ffffff"
      }
    }
  ]
};

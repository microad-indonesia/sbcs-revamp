/**
 * @type {import('next').NextConfig}
 */

const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};


const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const moduleExport = withBundleAnalyzer({
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
    hideSourceMaps: false,
  },

  // images: {
  //   unoptimized: true,
  // },

  output: 'standalone',

  swcMinify: true,

  images: {
    domains: ["assets.vercel.com"],
    formats: ["image/webp"],
  },
});

module.exports = withSentryConfig(moduleExport, sentryWebpackPluginOptions);

/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'mysite.com', // 배포 주소
      'localhost', // for local development
      '10.0.2.2', // Android emulator
      // 's3.us-west-2.amazonaws.com', // S3 bucket (notion)
      // 'storage.googleapis.com', // GCP bucket
      // 'k.kakaocdn.net', // Kakao CDN
    ],
    // minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days, 노션 이미지 expire 방지
  },

  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
};

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

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

const webpack = require('webpack');
const InjectPlugin = require('webpack-inject-plugin').default;
const { forceUiSettings } = require('./polyfills');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        apiUrl: JSON.stringify(process.env.apiUrl)
      }
    }),
    new InjectPlugin(forceUiSettings)
  ]
};
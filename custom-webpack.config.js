const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        apiUrl: JSON.stringify(process.env.apiUrl)
      }
    })
  ]
};
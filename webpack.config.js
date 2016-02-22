var webpack = require('webpack');

module.exports = {
  entry: './worker.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

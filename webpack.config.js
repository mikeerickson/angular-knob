var webpack = require('webpack');
var path    = require('path');

module.exports = {
  devtool: 'source-map',
  context: './src',
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader'}
    ]
  },
}

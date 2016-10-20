var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/autogenpapersystem'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders:[
          {
            test: /\.css$/,
            include: path.join(__dirname, 'client'),
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'client')
          },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};

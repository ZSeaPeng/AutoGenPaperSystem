let webpack = require('webpack');
let path = require('path');

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
            loader: 'style-loader!css-loader?modules'
          },
          {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'client')
          },
          {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
          },
          {
            test: /\.less$/,
            loader: "style!css!less"
          },
          {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url?prefix=font/&limit=10000'
          }
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
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ]
};

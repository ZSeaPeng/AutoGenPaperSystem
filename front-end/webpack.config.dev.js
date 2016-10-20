var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtools: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
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
          {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
          },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


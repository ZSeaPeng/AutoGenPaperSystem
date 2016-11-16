let webpack = require('webpack');
let path = require('path');

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
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader?limit=8192'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


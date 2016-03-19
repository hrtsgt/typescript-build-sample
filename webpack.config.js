'use strict'

var path = require('path');
var webpack = require("webpack");
var env = process.env.NODE_ENV;

var config = {
  entry: {
    app :'./src/ts/entrypoint.ts'
  },
  output: {
    filename: 'js/bundle.js'
  },
  resolve: {
    // root:[path.join(__dirname,'node_modules')],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },

  devtool: 'source-map',

  module: {
    loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }]
        // { test: /\.ts$/, loader: 'awesome-typescript-loader'}]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}

if (env === "production") {
  // JS圧縮
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
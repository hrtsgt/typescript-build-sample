var path = require('path');
var webpack = require("webpack");

module.exports = {
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
        // { test: /\.ts$/, loader: 'ts-loader' }
        { test: /\.ts$/, loader: 'awesome-typescript-loader'}]
  },

  plugins: [
    // js圧縮
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //   }
    // })
  ]
}
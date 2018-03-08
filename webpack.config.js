const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/assets/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
     }]
  },
  devServer: {
    contentBase: __dirname + '/public',
    port: 8080,
    publicPath: '/js/'
  }
};
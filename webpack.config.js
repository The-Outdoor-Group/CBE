const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test Universal Rendering',
      template: path.resolve(__dirname, 'client/template.html'),
      hash: true
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
}

const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/client/index.html'),
          hash: true
  }),
  new LoadablePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      IS_BROWSER: "true"
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new MiniCssExtractPlugin(),
];

module.exports = {
  context: srcPath,
  target: 'web',
  // mode: process.env.NODE_ENV, // || 'development',
  entry: `${srcPath}/client/index.js`,
  output: {
    path: `${distPath}/web/`,
    filename: '[name].[hash].js',
    publicPath: '/assets/web/'
  },
  resolve: {
      modules: ['node_modules', 'shared'],
      extensions: ['*', '.js', '.json'],
  },
  stats: {
    errors: true,
    errorDetails: true,
    warnings: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
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
  plugins,
  devtool: 'source-map'
}

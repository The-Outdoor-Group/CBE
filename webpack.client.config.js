const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
  new WorkboxPlugin.InjectManifest({
    swSrc: path.resolve(__dirname, 'src/shared/service-workers/sw.js'),
    swDest: `${distPath}/web/service-worker.js`,
  }),
];


module.exports = {
  mode: 'production',
  context: srcPath,
  target: 'web',
  entry: `${srcPath}/client/index.js`,
  output: {
    path: `${distPath}/web/`,
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
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
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
          // test:  /[\\/]node_modules[\\/](helmet|react|react-dom|react-redux|redux|redux-saga|@redux-saga[\\/]simple-saga-monitor|lodash|react-router|react-router-dom|gsap|TimelineMax|TweenMax|@loadable|prop-types)[\\/]/,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -10,
          enforce: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [new TerserPlugin()]
  },
  plugins,
  devtool: 'hidden-source-map'
}

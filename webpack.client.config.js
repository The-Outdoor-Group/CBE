const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
    importWorkboxFrom: 'local',
    include: [/\.html$/, /\.js$/, /\.css$/],
    runtimeCaching: [{
      urlPattern: /\.(?:png|jpg|svg|html|js|css)S/,
      handler: 'cacheFirst',
    }]
  }),
];


module.exports = {
  context: srcPath,
  target: 'web',
  entry: `${srcPath}/client/index.js`,

  output: {
    path: `${distPath}/web/`,
    filename: '[name].[hash].js',
    chunkFilename: '[id].js',
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
          test:  /[\\/](helmet|react|react-dom|react-redux|redux|redux-saga|@redux-saga[\\/]simple-saga-monitor|lodash|react-router|react-router-dom|gsap|@loadable|prop-types)[\\/]/,
          name: 'vendors',
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
    minimizer: [new UglifyJsPlugin()]
  },
  plugins,
  devtool: 'hidden-source-map'
}

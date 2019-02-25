const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new MiniCssExtractPlugin(),
  new LoadablePlugin()
];

module.exports = {
  context: srcPath,
  // mode: process.env.NODE_ENV, // || 'development',
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    path: `${distPath}/node/`,
    publicPath: '/assets/node/',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
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
  plugins,
  externals: nodeExternals()
}

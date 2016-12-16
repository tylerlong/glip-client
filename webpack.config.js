const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "index.bundle.js",
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};

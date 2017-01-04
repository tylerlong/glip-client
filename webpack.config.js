const path = require('path')

module.exports = {
  entry: "./src/glip-client.js",
  output: {
    path: path.join(__dirname, 'src'),
    filename: "index.bundle.js",
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['env', {
              'targets': {
                'node': 4.2
              }
            }]
          ]
        }
      }
    ],
  },
  target: 'node',
};

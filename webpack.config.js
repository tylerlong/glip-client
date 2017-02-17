const config = {
  target: 'node',
  entry: {
    'index': './src/glip-client.js'
  },
  output: {
    path: './src',
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                  'node': 4.2
                }
              }]
            ]
          }
        }
      }
    ]
  }
}

export default [config]

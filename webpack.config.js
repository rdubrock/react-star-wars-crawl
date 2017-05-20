const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'StarWarsCrawl.js'
  },
  module: {
    loaders: [
      {
        loaders: ['style-loader', 'css-loader'],
        test: /\.css$/,
        exclude: /node_modules/
      },
      {
        loaders: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

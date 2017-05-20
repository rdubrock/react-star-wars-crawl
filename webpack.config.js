const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'ReactStarWarsCrawl',
    libraryTarget: 'umd'
//    path: path.resolve(__dirname, 'lib'),
//    filename: 'StarWarsCrawl.js'
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

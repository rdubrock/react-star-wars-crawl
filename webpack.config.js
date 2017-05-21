const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
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

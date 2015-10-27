module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  },
  output: {
    path: './dist/',
    publicPath: '/',
    filename: 'bundle.js'
  }
}
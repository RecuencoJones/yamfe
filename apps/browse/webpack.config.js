module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/www',
    filename: 'index.js',
    library: 'browse',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'source-map'
}

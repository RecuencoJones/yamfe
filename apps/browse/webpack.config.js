module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/www',
    filename: 'index.js',
    library: 'browse',
    libraryTarget: 'window'
  },
  devtool: 'source-map'
}

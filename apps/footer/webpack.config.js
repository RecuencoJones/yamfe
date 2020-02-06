const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/www',
    filename: 'index.js',
    library: 'footer',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader'
      }
    ]
  },
  resolve: {
    mainFields: ['svelte', 'main'],
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte']
  },
  devtool: 'source-map'
}

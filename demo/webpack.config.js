var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: __dirname
  }
}

const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'storable-functions.js',
    path: path.resolve(__dirname, './docs/js/'),
  },
  mode: 'production'
}

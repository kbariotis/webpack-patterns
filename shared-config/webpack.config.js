const path = require('path')

const env = process.env.NODE_ENV

const configName = env || 'default'

module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: []
  },
  resolve: {
    alias: {
      'config': path.resolve(__dirname, `config/${configName}.json`)
    }
  }
}

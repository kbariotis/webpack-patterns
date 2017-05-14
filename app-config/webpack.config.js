const path = require('path');
const webpack = require('webpack');
const config = require('config');

/**
 * Stringify values to pass to DefinePlugin
 */
const packinize = (obj) => {
  const ret = Object.assign({}, obj);

  (function pack(o) {
    Object.keys(o).forEach((key) => {
      const v = o[key];
      if (typeof v === 'string' || typeof v === 'boolean') {
        o[key] = JSON.stringify(v);
      } else if (
        (typeof v === 'object') &&
        (typeof v !== 'function')
      ) {
        pack(v);
      }
    });
  }(ret));

  return ret;
};

module.exports = {
  entry: './index.js',
  plugins: [
    new webpack.DefinePlugin({
      __CONFIG__: packinize(config)
    })
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist')
  }
}

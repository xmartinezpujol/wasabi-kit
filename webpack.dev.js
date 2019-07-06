const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
    openPage: '',
  },
});

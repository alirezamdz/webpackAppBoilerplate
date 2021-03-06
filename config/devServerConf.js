const path = require("path");

module.exports = {
  contentBase: path.resolve(__dirname, 'dist'),
  compress: true,
  port: 9999,
  stats: 'errors-only',
  open: true
};
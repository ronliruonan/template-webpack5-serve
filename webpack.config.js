const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // module: {
  //   rules: [
  //     // loaders config
  //   ]
  // },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  // 开发服务器
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // compress: true, 
    port: 3000,
    open: true,
  }
};
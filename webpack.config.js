const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  target: 'web',
  module: {
    rules: [
      {test: /\.(js|jsx|ts|tsx)?$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
};

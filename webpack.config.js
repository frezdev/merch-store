const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3005,
  },
}
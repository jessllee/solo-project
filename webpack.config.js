const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {//BABEL CONFIG FOR CSS FILES
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {//BABEL CONFIG FOR IMAGES
      //   test: /\.(png|jp(e*)g|svg|gif)$/,
      //   use: ['file-loader'],
      // },
      // {//BABEL CONFIG FOR SVG AS REACT COMPONENT
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}

const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {//BABEL CONFIG FOR CSS FILES
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
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
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}

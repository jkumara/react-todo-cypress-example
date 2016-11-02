var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/only-dev-server",
    "./src/index.js",
  ],

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo list",
      template: path.join(__dirname, "templates", "todo.ejs")
    })
  ],

  devtool: "cheap-module-eval-source-map",

  devServer: {
    historyApiFallback: true
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules|docs|build/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["react-hot", "babel-loader"],
        exclude: /node_modules|docs|build/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline?classPrefix'
      }
    ]
  }
}

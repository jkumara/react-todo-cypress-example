var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/only-dev-server",
    "./index.js",
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url",
        query: {
          limit: 10000,
          name: "/static/img/[name].[hash:7].[ext]"
        }
      }
    ]
  }
}
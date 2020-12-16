const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname,"./src/index.js"),

  module:{
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },{
      test: /\.(scss|css)$/,
      use: ["style-loader", "css-loader","postcss-loader","sass-loader"]
    },{
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      }
    }]
  },
  resolve: {
    extensions: ['*','.js']
  },
  output:{
    path: path.resolve(__dirname,"./public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname,"./public")
  }
}
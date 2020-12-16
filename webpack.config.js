const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

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
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebPackPlugin()
  ]
}
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

// webpack will replace process.env.API_URL with the URL we set here
// plugins: [
//   new webpack.DefinePlugin({
//     "process.env.API_URL": JSON.stringify("http://localhost:3001")
//   }),

/*
--cheap-module-source-map let us see original code in browser
when debugging since we transpile it with babel.
--webpack doesnt output in dev mode it server from memory
--(removed)disablehostcheck, header, https ommit in case chrome bug is fixed
-- module.rules.use --> run babel on all of our JS and webpack will bundle that up for us
   same for css it will bundle up all of our css
*/

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

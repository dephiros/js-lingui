const path = require("path")
const I18nPlugin = require('./i18n-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve("public")
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "@lingui/loader",
        type: "javascript/auto"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve("public")
  },
  plugins: [
    new I18nPlugin({})
  ],
}

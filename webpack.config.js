module.exports = {
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    // path: "./app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

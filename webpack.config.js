var path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "./app.js"),
  output: {
    path: __dirname,
    filename: "compiled.js",
  },
  module: {
  rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

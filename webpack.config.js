module.exports = {
    output: {
      libraryTarget: "umd",
      library: "webpack-react-tutorial"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
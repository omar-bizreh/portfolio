module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-loader!vue-md-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // plugin omitted
};

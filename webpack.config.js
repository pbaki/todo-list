const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: {
    index: './src/index.js',
    folder: './src/folder.js',
    task: './src/task.js',
    taskDOM: './src/taskDOM',
    folderDOM: './src/folderDOM',
  },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo list',
    }),
  ],
  devtool: 'inline-source-map',
  output: {
     filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
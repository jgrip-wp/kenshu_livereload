const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: path.resolve(__dirname, 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: '[name].bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // publicフォルダにHTML等を設置する
    publicPath: '/assets/',                         // webpackで出力するファイルは/assets/*というURLでアクセス
    inline: true,                                   // webpackで出力したファイルにlivereloadを有効にするコードを挿入させる(この機能はデフォルトでonだが、学習のため回は明示的に指定する)
    watchContentBase: true                          // livereloadを有効にする
  }
}

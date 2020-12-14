const Path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../static'), to: 'static' }] }),
    
  ],
  //别名
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        //处理顺序：从右向左执行
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            //图片小于8k，转换成base64，节约请求次数，大于8k，不转换成base64
            limit: 8 * 1024,
            name: '[path][name].[ext]',
            //静态资源引用路径
            publicPath: './static/images/',
            //输出的文件目录
            outputPath: 'static/images/',
          },
        },
      },
    ],
  },
}
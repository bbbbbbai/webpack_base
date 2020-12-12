const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//引入mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//导出配置对象
module.exports = {
  entry: './src/main.js',
  output: {
    //__dirname是nodejs的一个全局变量，指向被执行js文件的绝对路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.js',
  },
  //mode：打包模式：production（压缩），development（不压缩）
  mode: 'development',
  //plugins 为插件配置
  plugins: [
    new HtmlWebpackPlugin({
      //html模板文件路径
      templte: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      //打包好文件的存放路径和文件名(/dist/css/index.css)
      filename: 'css/index.css',
    }),
  ],
  //module：模块加载规则
  module: {
    //loader：加载器的规则
    rules: [
      {
        //test：标识出被loader进行转换的文件
        //正则表达式，匹配所有js文件
        test: /\.js$/,
        //排除文件（排除node_modules文件夹）
        exclude: /(node_modules)/,
        //use：配置转换时使用的loader
        //处理顺序：从右向左执行
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        //test：标识出被loader进行转换的文件
        //正则表达式，匹配所有css和less文件
        test: /\.(css|less)$/,
        //use：配置转换时使用的loader
        //处理顺序：从右向左执行
        //css-loader：让webpack能够识别解析css文件
        //less-loader：让webpack能够识别解析css文件
        //style-loader：通过js动态创建style标签，让解析后的css作用到页面中
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //公共资源加载路径
              publicPath: '../',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
}

# 学习webpack

[参考](https://juejin.cn/post/6904538360249843719#heading-7)



### 自动生成html插件：html-webpack-plugin
html-webpack-plugin 插件简化了HTML文件的创建实现，将为你生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包，实现 public 目录下 index.html 不需要手动引入打包后的文件，会被该插件自动生成 HTML 文件引入
```
npm install html-webpack-plugin -D
```

### webpack使用Babel降级处理高版本的js语法 
Babel 是 JavaScript 编译器，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容的版本 babel-loader：允许你使用 Babel 和 webpack 转译 JavaScript 文件 安装依赖：
```
npm install -D babel-loader @babel/core @babel/preset-env
```

### webpack打包前清除dist目录
clean-webpack-plugin 插件可以在每次打包前清除 dist 文件夹，再打包生成新的打包文件 安装 clean-webpack-plugin：
```
npm install clean-webpack-plugin -D
```
### webpack处理css文件
style-loader ：将模块的导出作为样式添加到 DOM 中
css-loader ：解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
入口文件 main.js 中使用 require() 引入css文件
安装 style-loader 和 css-loader：

```
npm install style-loader css-loader -D
```


### 分离css文件插件
mini-css-extract-plugin 插件可以将 CSS 提取为独立的文件，对每个包含 css 的 js 文件都会创建一个CSS文件，支持按需加载 css 和 sourceMap，该插件只能用于 webpack4 中
安装 mini-css-extract-plugin：

```
npm install mini-css-extract-plugin -D
```

### webpack处理less文件

less-loader：加载和转译 LESS 文件 入口文件 main.js 中使用 require() 引入less文件 安装 less 和 less-loader：

```
npm install less less-loader -D
```

### webpack处理图片

file-loader： 将文件发送到输出文件夹，并返回（相对）URL url-loader： 像 file loader 一样工作，但如果文件小于限制，可以返回 data URL 安装 url-loader 和 file-loader：

```
npm install url-loader file-loader -D
```
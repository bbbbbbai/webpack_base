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

### webpack开发服务器

webpack-dev-server 为你提供了一个具有 live reloading(实时重新加载) 功能的简单的 web server，并且可以实现反向代理，解决在开发过程中的跨域问题 安装 webpack-dev-server：

```
npm install webpack-dev-server -D
```

### copy-webpack-plugin
webpack-copy-plugin并非旨在复制从构建过程中生成的文件；而是在构建过程中复制源树中已经存在的文件。

```
  npm install copy-webpack-plugin --save-dev
```

### resolve

创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：
[resolve](https://webpack.docschina.org/configuration/resolve/#root)

###  webpack-merge

development(开发环境) 和 production(生产环境) 这两个环境下的构建目标存在着巨大差异。在开发环境中，我们需要：强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server。而生产环境目标则转移至其他方面，关注点在于压缩 bundle、更轻量的 source map、资源优化等，通过这些优化方式改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

[webpack-merge](https://webpack.docschina.org/guides/production/#setup)

```
npm install --save-dev webpack-merge
```


### devtool

此选项控制是否生成，以及如何生成 source map。

### bail

在第一个错误出现时抛出失败结果，而不是容忍它。默认情况下，当使用 HMR 时，webpack 会将在终端以及浏览器控制台中，以红色文字记录这些错误，但仍然继续进行打包。要启用它：

### mini-css-extract-plugin

本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。

本插件基于 webpack v4 的新特性（模块类型）构建，并且需要 webpack 4 才能正常工作。

```
npm install --save-dev mini-css-extract-plugin
```




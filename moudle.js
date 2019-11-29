// console.log(global);
// CommonJS API
// CommonJS API定义了很多普通应用程序（主要指非浏览器的应用）使用的API，从而填补了这个空白。它的终极目标是提供一个类似Python，Ruby和Java的标准库。
// CommonJs是一种规范，Node.js就是这种规范的实现。
(function(exports, require, module, __filename, __dirname) {
  exports.a = 1;
  exports.fn = function() {
    console.log(1);
  };
});
const b = require("./mock");
console.log(b);

// 关于浏览器中不能使用require语法的解决方案

// 目前NPM上有二十多万个NodeJS模块，它们都是通过CMD的方式打包的，除了特定的可以使用CMD模块加载器加载的模块，大部分nodejs模块无法直接使用到浏览器环境中。

// Browserify是一个供浏览器环境使用的模块打包工具，像在node环境一样，也是通过require('modules')来组织模块之间的引用和依赖，既可以引用npm中的模块，也可以引用自己写的模块，然后打包成js文件，再在页面中通过<script>标签加载。

// 当然对于很多NodeJS模块，比如涉及到io操作的模块，就算通过browserify打包后肯定也无法运行在浏览器环境中，这种情况下就会用到为它们重写的支持浏览器端的分支模块，可以在browserify search搜索到这些模块。

 1 npm install -g browserify
 2 Usage: browserify [entry files] {OPTIONS}


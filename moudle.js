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

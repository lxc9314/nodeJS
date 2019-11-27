exports.a = 1;
module.exports = 1;
module.exports = {}; //在内部的话这个东西默认等于{}
//所以你想到了导出的话可以这样
// module.exports = {
//   a: 1,
//   b: function() {},
//   c: "name"
// };
//这样做是不正确的
exports = {
  a: 1,
  b: 2,
  c: 3
};
// 因为exports是module.exports的一个引用，重新给exports赋值的话只会改变exports的值，而require引入的话寻找的是模块中的module.exports

// exports 和 module.exports 的使用
// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports

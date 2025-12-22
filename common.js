// common.js - 无async/defer的外部脚本
console.log("外部脚本common.js执行");
// 定义全局变量供内联脚本调用
const test = "我是外部脚本定义的变量";
// 简单DOM操作：修改图片alt属性（验证脚本可操作body内的元素）
document.querySelector('img').alt = "已被外部脚本修改的首图";
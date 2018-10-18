'use strict'
// console.log(process);

console.time("ldh");

process.env.NODE_ENV = 'development';
process.env.NODE_ENV = 'production';

// console.log(process.env);
console.log('a', 'b');

// console.error("我是一个error级别的log");

// F:\ws_space\Node01
console.log(__dirname);
console.log(__filename);

console.timeEnd("ldh");

// setTimeout( ()=>{
//     console.log("我执行了");
// }, 1000);

// setInterval(()=>{
//     console.log("我每秒钟执行一次");
// }, 1000);
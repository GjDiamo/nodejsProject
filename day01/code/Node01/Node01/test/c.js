'use strict'
let fs = require("fs");

let a = 10;
a ++;

console.log("1111");

// 耗时IO
let data = "床前明月光，疑是地上霜";
console.log("2222");

fs.writeFile("./a.txt",data, function (res) {
    console.log("文件写入完成");
});

//耗时10秒
for (let i = 0; i < 10000000000; i++) {
    let a = 10000;
    a++;
    console.log(a);
}

//模拟非耗时的用户代码
let abc = 100;
console.log("3333");

// console.log(abc);
abc += 1000;
console.log("44444");
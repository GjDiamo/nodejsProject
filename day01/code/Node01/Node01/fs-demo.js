'use strict'
let fs = require("fs");
let path = require("path");
let fs2 = require('fs-extra');


// fs.readFile("a.txt", (err, data) =>{
//     if(err){
//         throw err;
//     }
//
//     console.log(data.toString());
// });

// let data = "举头望明月，低头思故乡";
// fs.writeFile("b.txt", data, (err)=>{
//     if(err){
//         throw err;
//     }
//
// });

// let target = "./test";
// fs.readdir(target, (err, files)=>{
//     //遍历数组
//     files.forEach( f =>{
//         // 判断当前的f到底是文件夹还是文件
//         fs.stat(path.join(target, f), (err, stat)=>{
//             if(err){
//                 throw err;
//             }
//             console.log(f + " : "+ stat.isDirectory());
//         })
//     });
// });

// 删除文件
// fs.unlink("test/a.txt", (err)=>{
//     if(err){
//         console.log("删除失败："+err);
//     }else {
//         console.log("删除成功");
//     }
// });

// 删除文件夹
// fs.rmdir("test", (err) =>{
//    console.log(err);
// });

//同步阻塞的方式来读取文件
// let data = fs.readFileSync("async-demo.js");
// console.log(data.toString());


// fs2.remove("test");

// 监视文件变化
fs.watchFile("a.txt", {interval: 500} , (current, previous)=>{
   console.log(" current mtime:" + current.mtime);
   console.log(" previous mtime:" + previous.mtime);
});



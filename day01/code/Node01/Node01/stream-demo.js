'use strict'
let fs = require("fs");

// fs.readFile("MobyLinuxVM.vhdx", (err, data)=>{
//     console.log(err);
// });

let reader = fs.createReadStream("MobyLinuxVM.vhdx");
let writer = fs.createWriteStream("MobyLinuxVM-copy.vhdx");
// let len = 0;
// reader.on('data', (chunk)=>{
//     //chunk是每次读取到的一小块字节
//     // console.log(chunk.length);
//     // len += chunk.length;
//     writer.write(chunk, ()=>{
//         console.log("写入了一个chunk");
//     })
// });
// reader.on('end', ()=>{
//    console.log("读取完毕,总大小："+len);
// });

reader.pipe(writer);
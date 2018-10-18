'use strict'
let http = require('http');
let fs = require('fs');

//创建Server
// let server = http.createServer( (req, res)=>{
//    console.log(req.url);
//    res.writeHead(200, {"content-type": "text/html;charset=utf-8"});
//    // let person = {
//    //     name: "李连杰",
//    //     age: 55
//    // };
//    // res.end(JSON.stringify(person))
//     if(req.url === '/a'){
//         let html = fs.readFileSync('a.html');
//         res.end(html);
//     }else if(req.url ==='/b'){
//         let html = fs.readFileSync('b.html');
//         res.end(html);
//     }else if(req.url ==='/'){
//         let html = fs.readFileSync('index.html');
//         res.end(html);
//     }
//
// });
// server.listen(4000);

// http client的功能
http.get("http://www.baidu.com/", res=>{
    // res本质上是一个reader对象，可以监听data事件来拿数据
    let data = ''
    res.on('data', (chunk)=>{
        data += chunk.toString();
    });
    res.on('end', ()=>{
        console.log(data);
    })
});
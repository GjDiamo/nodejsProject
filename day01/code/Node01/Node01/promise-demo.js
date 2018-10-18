'use strict'
// 一段逻辑：
// 先判断一个文件是文件还是目录，如果是目录就读取这个目录下的文件列表，
// 找出结尾是txt的文件，然后获取它的文件大小。
let fs = require("fs");
let path = require('path');
let util = require('util');

function withoutPromise() {
    let target = "test";
    fs.stat(target, (err, stat)=>{
        if(err){
            throw err;
        }
        // 如果是文件夹
        if(stat.isDirectory()){
            fs.readdir(target, (err, files)=>{
                // 遍历files
                files.forEach( f =>{
                    if(path.extname(f) === '.txt'){
                        fs.stat(path.join(target, f), (err, stat)=>{
                            console.log(f+ " : "+stat.size);
                        });
                    }
                } );
            });
        }
    });
}



// 用promise和async/await的风格来改下上面的逻辑
async function withPromise() {
    let target = "test";
    //将fs.stat转为一个可以返回Promise对象的方法
    let pstat = util.promisify(fs.stat);
    let stat = await pstat(target);
    // 如果是文件夹
    if(stat.isDirectory()){
        //将fs.readdir转为一个可以返回Promise对象的方法
        let preaddir = util.promisify(fs.readdir)
        let files = await preaddir(target)
        files.forEach( async (f) => {
            if(path.extname(f) === '.txt'){
                let stat = await pstat(path.join(target, f));
                console.log(stat.size);

                // fs.stat(path.join(target, f), (err, stat)=>{
                //     console.log(f+ " : "+stat.size);
                // });
            }
        });
    }
}

withPromise();

// 用proimse对象含有回调方法的代码进行包装
// let promise = new Promise( (resolve, reject)=>{
//     // resolve方法是当异步操作成功的时候调用
//     // reject方法是当异步操作出现异常的时候调用
//     fs.readFile("test/a111.txt", (err, data)=>{
//         if(err){
//             //说明有异常
//             reject(err);
//         }else {
//             //说明异步操作是成功的
//             resolve(data)
//         }
//     })
// } );

//直接使用promise，问题是仍然需要传回调，不建议直接使用
// promise.then((data)=>{
//    console.log("异步操作成功： "+ data.toString());
// }).catch((err)=>{
//     console.log("出异常:"+err);
// });

// 使用async/await语法来调用promise对象
// async function asyncDemo() {
//     // 使用try/catch捕获promise内部的异常
//     try {
//         let data = await promise;
//         console.log(data.toString());
//     }catch (e){
//         console.log("promise内部出异常了："+e);
//     }
//
// }
//
// asyncDemo();
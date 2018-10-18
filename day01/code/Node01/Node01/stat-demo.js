'use strict'
let fs = require("fs");

fs.stat("async-demo.js", (err, stat)=>{
    if(err){
        console.log(err);
        return
    }
    
    console.log(`size: ${stat.size} mtime: ${stat.mtime} isFile: ${stat.isFile()} isDir: ${stat.isDirectory()}`);
});
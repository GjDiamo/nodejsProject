'use strict'
let path = require("path");

console.log("__filename: "+__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname("F:/imgs/a.jpg"));

console.log(path.join("F:/aaa", "bbb", "test.jpg")); //f:/aaa/bbb/test.jpg
console.log(path.normalize("F:/a\\b\\c/d")); //f:\a\b\c\d
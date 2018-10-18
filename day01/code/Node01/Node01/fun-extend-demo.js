'use strict'

function demo(name, address = "深圳") {
    console.log(name, address);
}

// demo("小王", "北京");
// demo("李雷");
// demo("韩梅梅");

function add(x, y) {
    return x + y;
    // console.log('执行了');
}

let add2 = (x,y) => x+y;
//
console.log( add2(1,2) );

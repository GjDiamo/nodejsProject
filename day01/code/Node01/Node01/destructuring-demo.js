'use strict'

let arr = [1, 2, '李晓俊'];
// console.log(arr[0]);
// console.log(arr[1]);

let [a, b] = arr;
// console.log(a, b);

let person = {
    name: "lxj",
    address: "深圳",
    age: 100
};
// let {name, age} = person;
// console.log(name, age);

function printPerson( {name, age}) {
    console.log(name,age);
}
printPerson(person);
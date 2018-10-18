'use strict'

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    say(){
        console.log(`name: ${this.name} age: ${this.age}`); // raw string 原生字符串
    }
    
    sing(){
        console.log('唱歌');
    }
}

class Man extends Person{
    constructor(name, age){
        super(name, age)
    }

    say(){
        console.log("我重载了父类的方法");
    }
}


let person = new Person("刘德华", 55);
person.say();

let man = new Man("李连杰", 60);
// console.log(man.name);
man.say()
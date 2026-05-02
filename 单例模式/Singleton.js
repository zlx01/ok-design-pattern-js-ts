"use strict";
class Singleton {
    // 构造函数私有化
    constructor() { }
    // 外部只能通过静态方法获取实例
    static getInstance() {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true

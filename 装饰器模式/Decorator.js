"use strict";
class Component {
    operation() {
        console.log("operation");
    }
}
class Decorator {
    constructor(component) {
        this.component = component;
    }
    operation() {
        console.log('增强装饰类的方法');
        this.component.operation();
    }
    operation2() {
        console.log('扩展方法');
    }
}
const component = new Component();
const decorator = new Decorator(component);
decorator.operation();
decorator.operation2();

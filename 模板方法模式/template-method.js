"use strict";
class Beverage {
    boilWater() {
        console.log('把水煮沸');
    }
    makeBeverage() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
}
class Coffee extends Beverage {
    brew() {
        console.log('用沸水冲泡咖啡');
    }
    pourInCup() {
        console.log('把咖啡倒进杯子');
    }
    addCondiments() {
        console.log('加糖和牛奶');
    }
}
class Tea extends Beverage {
    addCondiments() {
        console.log('用沸水浸泡茶叶');
    }
    brew() {
        console.log('把茶倒进杯子');
    }
    pourInCup() {
        console.log('加柠檬');
    }
}
(() => {
    const coffee = new Coffee();
    coffee.makeBeverage();
    console.log('--------------------');
    const tea = new Tea();
    tea.makeBeverage();
})();

abstract class Beverage {
  boilWater() {
    console.log('把水煮沸')
  }

  abstract brew(): void;

  abstract pourInCup(): void;

  abstract addCondiments(): void;

  makeBeverage() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }
}

class Coffee extends Beverage {
  brew(): void {
    console.log('用沸水冲泡咖啡')
  }

  pourInCup(): void {
    console.log('把咖啡倒进杯子')
  }

  addCondiments(): void {
    console.log('加糖和牛奶')
  }
}

class Tea extends Beverage {
  addCondiments(): void {
    console.log('用沸水浸泡茶叶')
  }

  brew(): void {
    console.log('把茶倒进杯子')
  }

  pourInCup(): void {
    console.log('加柠檬')
  }
}

(()=> {
  const coffee = new Coffee()
  coffee.makeBeverage()
  console.log('--------------------')
  const tea = new Tea()
  tea.makeBeverage()
})();



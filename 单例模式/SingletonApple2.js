class SingletonApple {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
  }
  // 静态方法
  static getInstance(name, creator, products) {
    if (!SingletonApple.instance) {
      SingletonApple.instance = new SingletonApple(name, creator, products);
    }
    return SingletonApple.instance;
  }
}

let apple1 = SingletonApple.getInstance("苹果公司", "乔布斯");
let apple2 = SingletonApple.getInstance("苹果公司", "库克");
console.log(apple1 === apple2); // true

let apple3 = new SingletonApple("苹果公司", "库克");

// 可以直接new
console.log(apple1 === apple3); // false

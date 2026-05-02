class SingletonApple {
  constructor(name, creator) {
    if (!SingletonApple.instance) {
      this.name = name;
      this.creator = creator;
      SingletonApple.instance = this;
    }
    return SingletonApple.instance;
  }
}

let apple1 = new SingletonApple("苹果公司", "乔布斯");
let apple2 = new SingletonApple("苹果公司", "库克");
console.log(apple1 === apple2); // true

// 这里可以直接访问到实例对象，所以这种单例模式有漏洞
SingletonApple.instance = null;
let apple3 = new SingletonApple("苹果公司", "库克");
console.log(apple1 === apple3); // false

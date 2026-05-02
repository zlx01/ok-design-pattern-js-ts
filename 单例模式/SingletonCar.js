// 使用立即调用函数形成闭包，确保实例只在内部可用
const SingletonCar = (function () {
  let instance;

  function SingletonCarInner(name, price) {
    this.name = name;
    this.price = price;
  }

  return function (...args) {
    if (!instance) {
      instance = new SingletonCarInner(...args);
    }
    return instance;
  };
})();

const car1 = new SingletonCar("奔驰", "20w");
const car2 = new SingletonCar("本田", "10w");
console.log(car1); // SingletonCarInner { name: '奔驰', price: '20w' }
console.log(car2); // SingletonCarInner { name: '奔驰', price: '20w' }
console.log(car1 === car2); // true

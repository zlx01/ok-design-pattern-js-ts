class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  notify() {
    console.log(`ConcreteObserver ${this.name} is notified.`);
  }
}

class ConcreteSubject {
  observers = [];
  registerObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
    // const index = this.observers.indexOf(observer);
    // index !== -1 && this.observers.splice(index, 1);
  }
  notifyObservers() {
    this.observers.forEach((observer) => observer.notify());
  }
}

const observer1 = new ConcreteObserver("zhangsan");
const observer2 = new ConcreteObserver("lisi");

const subject = new ConcreteSubject();
subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers();

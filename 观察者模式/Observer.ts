interface Observer {
  notify: Function;
}

class ConcreteObserver implements Observer {
  constructor(private name: string) { }

  public notify() {
    console.log(`ConcreteObserver ${this.name} is notified.`);
  }
}

interface Subject {
  registerObserver: Function;
  removeObserver: Function;
  notifyObservers: Function;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  public registerObserver(observer: Observer) {
    this.observers.push(observer);
  }
  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter(o => o !== observer);
    // const index = this.observers.indexOf(observer);
    // index !== -1 && this.observers.splice(index, 1);
  }
  public notifyObservers() {
    this.observers.forEach(observer => observer.notify());
  }
}

const observer1 = new ConcreteObserver('zhangsan');
const observer2 = new ConcreteObserver('lisi');

const subject = new ConcreteSubject();
subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers();



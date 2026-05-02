interface IComponent {
  operation(): void;
}

class Component implements IComponent {
  public operation(): void {
    console.log("operation");
  }
}

class Decorator implements IComponent {
  private component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): void {
    console.log('增强装饰类的方法');
    this.component.operation();
  }

  public operation2(): void {
    console.log('扩展方法');
  }
}

const component = new Component();
const decorator = new Decorator(component);
decorator.operation();
decorator.operation2();
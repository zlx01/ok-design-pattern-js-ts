/**
 * 产品类
 */
class Computer {
  protected cpu: string;
  protected ram: string;

  public setCpu(cpu: string): Computer {
    this.cpu = cpu;
    return this;
  }

  public setRam(ram: string): Computer {
    this.ram = ram;
    return this;
  }
}

/**
 * 建造者抽象类，只关心步骤，不关心实现
 */
interface Builder {
  createCpu(cpu: string): void;
  createRam(ram: string): void;

  createComputer(): Computer;
}

/**
 * 建造者类，装机人员
 */
class Assembler implements Builder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public createCpu(cpu: string): void {
    this.computer.setCpu(cpu);
  }

  public createRam(ram: string): void {
    this.computer.setRam(ram);
  }

  public createComputer(): Computer {
    return this.computer;
  }
}

/**
 * 安排建造者工作
 */
class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  public createComputer(cpu: string, ram: string): Computer {
    this.builder.createCpu(cpu);
    this.builder.createRam(ram);
    return this.builder.createComputer();
  }
}

const builder = new Assembler();
const director = new Director(builder);
// 用户把配置交给老板，老板指挥装机人员装机
const computer = director.createComputer('Intel 酷睿i9 7900X', '金士顿猛狂16G');
console.log(computer);

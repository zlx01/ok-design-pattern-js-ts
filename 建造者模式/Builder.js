"use strict";
/**
 * 产品类
 */
class Computer {
    setCpu(cpu) {
        this.cpu = cpu;
        return this;
    }
    setRam(ram) {
        this.ram = ram;
        return this;
    }
}
/**
 * 建造者类，装机人员
 */
class Assembler {
    constructor() {
        this.computer = new Computer();
    }
    createCpu(cpu) {
        this.computer.setCpu(cpu);
    }
    createRam(ram) {
        this.computer.setRam(ram);
    }
    createComputer() {
        return this.computer;
    }
}
/**
 * 安排建造者工作
 */
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    createComputer(cpu, ram) {
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

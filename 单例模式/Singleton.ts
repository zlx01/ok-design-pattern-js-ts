class Singleton {
  // 实例对象私有化，且放在类属性上
  private static singleton: Singleton;

  // 构造函数私有化
  private constructor() {}

  // 外部只能通过静态方法获取实例
  public static getInstance(): Singleton {
    if (!Singleton.singleton) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true

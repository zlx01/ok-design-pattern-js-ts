interface Car {
  run(): void;
}

class BenzCar implements Car {
  public run(): void {
    console.log("BenzCar run");
  }
}

class BmwCar implements Car {
  public run(): void {
    console.log("BmwCar run");
  }
}

class CarFactory {
  public createCar(type: string): Car {
    if (type === "Benz") {
      return new BenzCar();
    } else if (type === "Bmw") {
      return new BmwCar();
    } else {
      throw new Error("Car type is not supported");
    }
  }
}

class Driver {
  private carFactory: CarFactory;
  constructor() {
    this.carFactory = new CarFactory();
  }

  driveCar(type: string): void {
    const car = this.carFactory.createCar(type);
    car.run();
  }
}

const driver = new Driver();
driver.driveCar("Benz");



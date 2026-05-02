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

interface CarFactory {
  createCar(): Car;
}

class BenzCarFactory implements CarFactory {
  public createCar(): Car {
    return new BenzCar();
  }
}

class BmwCarFactory implements CarFactory {
  public createCar(): Car {
    return new BmwCar();
  }
}

class Driver {
  driveCar(carFactory: CarFactory): void {
    const car = carFactory.createCar();
    car.run();
  }
}

const driver = new Driver();
driver.driveCar(new BenzCarFactory());

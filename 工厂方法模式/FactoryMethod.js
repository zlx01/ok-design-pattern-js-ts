"use strict";
class BenzCar {
    run() {
        console.log("BenzCar run");
    }
}
class BmwCar {
    run() {
        console.log("BmwCar run");
    }
}
class BenzCarFactory {
    createCar() {
        return new BenzCar();
    }
}
class BmwCarFactory {
    createCar() {
        return new BmwCar();
    }
}
class Driver {
    driveCar(carFactory) {
        const car = carFactory.createCar();
        car.run();
    }
}
const driver = new Driver();
driver.driveCar(new BenzCarFactory());

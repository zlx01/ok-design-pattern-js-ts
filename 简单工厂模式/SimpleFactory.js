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
class CarFactory {
    createCar(type) {
        if (type === "Benz") {
            return new BenzCar();
        }
        else if (type === "Bmw") {
            return new BmwCar();
        }
        else {
            throw new Error("Car type is not supported");
        }
    }
}
class Driver {
    constructor() {
        this.carFactory = new CarFactory();
    }
    driveCar(type) {
        const car = this.carFactory.createCar(type);
        car.run();
    }
}
const driver = new Driver();
driver.driveCar("Benz");

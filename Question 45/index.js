"use strict";
function createCar(manufacturer, model, color, features) {
    const car = { manufacturer, model };
    return car;
}
const myCar = createCar("Toyota", "Camry", "Blue", ["Sunroof", "Leather seats"]);
console.log(myCar);

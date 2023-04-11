function createCar(manufacturer: string, model: string, color?: string, features?: string[]){
    const car = { manufacturer, model };
    return car;
}

const myCar = createCar("Toyota", "Camry", "Blue", ["Sunroof", "Leather seats"]);
console.log(myCar);
  
function canDriveCar(user, car) {
    if (user.age >= 18 || car.engineSize < 1000) return true;

    return false;
}

const user = {age: 21, name: "Jon Doe"};
const car = {engineSize: 1200, name: "Mazda 3"};

console.log(canDriveCar(user, car)); // true
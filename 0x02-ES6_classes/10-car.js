const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
      this[_brand] = brand;
      this[_motor] = motor;
      this[_color] = color;
  }

  getBrand() {
      return this[_brand];
  }

  getMotor() {
      return this[_motor];
  }

  getColor() {
      return this[_color];
  }

  cloneCar() {
      return new Car(this[_brand], this[_motor], this[_color]);
  }
}

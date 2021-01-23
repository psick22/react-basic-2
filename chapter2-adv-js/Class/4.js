class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const person = new Person('mike');
person.name = 'jane'; // setter 호출
console.log(person.name); // getter 호출
console.log(Object.keys(person)); // getter 호출

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log('name is too short');
      return;
    }
    this._name = value;
  }
}
const person = new Person('mike');
console.log(person.name); // getter 호출
person.name = 'ab'; // setter 호출
console.log(person.name); // getter 호출

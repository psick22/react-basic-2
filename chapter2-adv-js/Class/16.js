class Person {}
class Programmer extends Person {}

const person1 = new Programmer();

console.log(person1 instanceof Person); // true
console.log(person1 instanceof Programmer); // true
console.log(person1 instanceof Object); // true

console.log(person1.__proto__ === Programmer.prototype); // true
console.log(person1.__proto__.__proto__ === Person.prototype); // true
console.log(person1.__proto__.__proto__.__proto__ === Object.prototype); // true

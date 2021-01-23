class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello~ ${this.hello}`);
  }
}

const person = new Person('mike');
person.sayHello;

console.log(typeof Person); // function
console.log(typeof person); // object
console.log(Object.keys(Person.prototype)); // []
console.log(Object.getOwnPropertyNames(Person.prototype)); // [ 'constructor', 'sayHello' ]
console.log(Object.keys(person)); // [ 'name' ]
console.log(Person.prototype.constructor === Person); // true
console.log(Person.prototype.sayHello); // [Function: sayHello]

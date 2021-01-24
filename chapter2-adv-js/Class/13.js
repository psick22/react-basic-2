class Person {
  #name = '';
  _age = 23;
  constructor(name) {
    this.#name = name;
  }
}

class Programmer extends Person {
  sayHello() {
    console.log(this.name); // undefined
    console.log(this['#name']); // undefined
  }
}

const person1 = new Programmer('mike', 25);
person1.sayHello();
console.log(person1.name); // undefined
console.log(person1['#name']); // undefined

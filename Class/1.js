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

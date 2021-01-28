// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');
console.log(me); // Person&nbsp;{name: "Lee"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
const you = Person('Kim');
console.log(you); // undefined

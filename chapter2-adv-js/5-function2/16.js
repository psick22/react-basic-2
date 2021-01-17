const counter3 = {
  value: 0,
  add: amount => (this.value += amount),
};

console.log(counter3.value);
counter3.add(5);
console.log(counter3.value);
const add3 = counter3.add;
add3(5);
console.log(counter3.value);

// 화살표 함수가 생성될 당시의 this는 화살표 함수를 감싸고 있는 함수가 없기 때문에 항상 전역 객체를 가리키게 된다.
// 따라서 객체의 value가 증가하지 않는다.

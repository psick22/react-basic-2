const obj = {
  age: 21,
  name: 'mike',
};

const obj2 = new Object({
  age: 21,
  name: 'mike',
});

console.log(Object.keys(obj)); // 객체내의 모든 key를 배열로 반환
console.log(Object.values(obj)); // 객체 내의 모든 value를 배열로 반환
console.log(Object.entries(obj)); // 객체 내의 key와 value를 튜플 형식으로 만들어서 배열로 반환

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

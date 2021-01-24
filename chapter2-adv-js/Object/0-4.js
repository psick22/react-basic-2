// 배열의 아이템으로 루프를 도는 방법
// (1) forEach, (2) 일반 for of 문
arr.forEach(item => console.log(item));
for (const item of arr) {
  console.log(item);
}

console.log(arr.some(item => item === 2)); // 아이템 중 하나라도 조건을 만족하면 true 반환
console.log(arr.every(item => item === 2)); // 모든 아이템이 조건을 만족하면 true, 아니면 false
console.log(arr.includes(2)); // 해당 값을 포함하면 true 반환
console.log(arr.find(item => item % 2 === 1)); // 오른쪽의 조건을 만족하는 첫번째 아이템을 반환
console.log(arr.findIndex(item => item % 2 === 1)); // 오른쪽의 조건을 만족하는 첫번째 아이템의 인덱스를 반환

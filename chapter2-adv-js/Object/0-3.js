const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(typeof arr === 'object'); //true, Array의 타입은 object이다
console.log(Object.values(arr)); // 따라서 Object 생성자의 함수 values, keys, entries 를 이용할 수 있다.
console.log(Object.keys(arr));
console.log(Object.entries(arr));

// Array 자체 메서드

console.log(arr.map(item => item + 1)); // 콜백 함수에 따라서 각 아이템의 값을 변경해서 새로운 배열을 반환 (기존 배열은 유지)
console.log(arr.filter(item => item >= 2)); // 오른쪽 조건을 만족하는 아이템만 새로운 배열로 반환 (기존 배열은 유지)
// 두번째 인자의 값부터 시작해서 모든 아이템에 대해서 콜백 함수를 수행해서 최종적으로 하나의 값을 반환 (acc는 누적된 값이 계속해서 들어옴)
console.log(arr.reduce((acc, item) => acc + item, 0));

const arr = [1, 2, 3];

// 배열을 스택 처럼 이용할 때 => push, pop
arr.push(4); // 맨 뒤에 아이템 추가
console.log(arr.pop()); // 뒤에 있는 아이템을 삭제하고 배열 반환
console.log(arr);

// splice (삭제와 추가)
arr.splice(1, 1); // 첫번째 매개변수는 인덱스, 두번째 매개변수는 삭제할 개수
arr.splice(1, 0, 10, 20, 30); // 세번째 매개변수 부터는 추가할 아이템

// 정렬
arr.sort(); // 아무것도 입력하지 않으면 오름차순 (기존 배열을 수정)
console.log(arr);

arr.sort((a, b) => (a % 10) - (b % 10)); // 매개변수로 입력하는 함수에서 음수를 반환하면 a, b의 순서를 변경하지 않고 양수를 반환하면 a, b의 순서를 변경
ㄹ;

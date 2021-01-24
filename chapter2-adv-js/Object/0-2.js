const obj = {
  age: 21,
  name: 'mike',
};

obj.city = 'seoul'; // 기존에 없던 속성이름에 어떤 값을 할당하면 해당하는 속성이 추가된다
obj.age = 30; // 기존 속성에 할당하면 값이 변경된다.
console.log(obj);

delete obj.city; // delete 키워드를 이용하면 오른쪽에 있는 속성을 삭제할 수 있다.
console.log(obj);

delete obj['name'];
console.log(obj);

const obj1 = {
  name: 'Lee',
  sayName: function () {
    // 메소드
    console.log(this.name);
  },
};

const obj2 = {
  name: 'Kim',
};

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();

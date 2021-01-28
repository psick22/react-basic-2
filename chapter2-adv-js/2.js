const foo = function () {
  console.dir(this);
};

foo();
console.log(this === global); // true

function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
    console.log(this === global);
  };
}
const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);

const add2 = counter2.add;
add2(5);
console.log(counter2.value);

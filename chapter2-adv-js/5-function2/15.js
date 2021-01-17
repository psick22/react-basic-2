const counter3 = {
  value: 0,
  add: function (amount) {
    this.value += amount;
  },
};

console.log(counter3.value);
counter3.add(5);
console.log(counter3.value);
const add3 = counter3.add;
add3(5);
console.log(counter3.value);

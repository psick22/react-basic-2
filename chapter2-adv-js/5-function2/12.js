function Counter() {
  this.value = 0;
  this.add = amount => {
    this.value += amount;
  };
}
const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);

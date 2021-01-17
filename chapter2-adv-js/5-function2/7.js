function getValues({ numbers, greaterThan = 0, lessThan = Number.MAX_VALUE }) {
  return numbers.filter(item => greaterThan < item && item < lessThan);
}
const numbers = [10, 20, 30, 40];
const result2 = getValues({ numbers, greaterThan: 5, lessThan: 25 });

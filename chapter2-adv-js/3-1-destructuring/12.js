function getZero() {
  console.log('hello');
  return 0;
}

const obj = { age: undefined, name: null, grade: 'A' };
const { age = getZero(), name = getZero(), grade = getZero() } = obj;
console.log({ age, name, grade });

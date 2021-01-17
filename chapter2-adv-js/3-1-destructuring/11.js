const obj = { age: undefined, name: null, grade: 'A' };
const { age: theAge = 0, name, grade } = obj;
console.log({ theAge, name, grade });

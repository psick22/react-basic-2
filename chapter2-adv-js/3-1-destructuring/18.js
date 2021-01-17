const obj = {};
const arr = [];

({ foo: obj.prop, bar: arr[2] } = { foo: 123, bar: true });
console.log(obj);
console.log(arr);

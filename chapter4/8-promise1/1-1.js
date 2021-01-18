function requestData(callback) {
  setTimeout(() => {
    callback({ name: 'abc', age: 23 });
  }, 1000);
}
function onSuccess(data) {
  console.log(data);
}

console.log('call requestDate');
requestData(onSuccess);

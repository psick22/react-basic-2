function requestData1(callback) {
  // ...
  callback(data);
}
function requestDatal2(callback) {
  // ...
  callback(data);
}
function onSucces1(data) {
  console.log(data);
  requestData(onSuccess2);
}
i;

function onSucces2(data) {
  console.log(data);
  // ...
}

requestData1(onSuccess1);

function requestData() {
  return fetch()
    .catch(err => {
      //...
    })
    .finally(() => {
      sendLogToServer('requestData finished');
    });
}
requestData().then(data => console.log(data));

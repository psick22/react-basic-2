function doSync() {
  throw new Error('some error');
}

function requestData() {
  return Promise.resolve()
    .then(doSync)
    .then(fetch)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

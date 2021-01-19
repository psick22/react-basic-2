let cachedPromise;
function getData() {
  cachedPromise = cachedPromise || requestData();
  return cachedPromise;
}
getData().then(v => console.log(v));
getData().then(v => console.log(v));

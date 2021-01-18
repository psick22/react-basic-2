async function getData() {
  try {
    await doAsync();
    return doSync();
  } catch (err) {
    console.log(error);
    return Promise.reject(err);
  }
}

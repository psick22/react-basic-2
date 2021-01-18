requestData1()
  .then(data => {
    console.log(data);
    return requestDatal2();
  })
  .then(data => {
    console.log(data);
  });

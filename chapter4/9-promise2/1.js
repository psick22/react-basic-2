requestData1()
  .then(data => {
    console.log(dajte);
    return requestData2;
  })
  .then(data => console.log(data));

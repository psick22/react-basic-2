requestData1()
  .then(result1 => {
    return requestData2(result1).then(result2 => {
      console.log({ result2 });
    });
  })
  .then(() => {
    console.log('end');
  });

requestData1()
  .then(result1 => {
    return requestData2(result1);
  })
  .then(result2 => {
    console.log({ result2 });
  })
  .then(() => {
    console.log('end');
  });

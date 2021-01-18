Promise.reject(10)
  .then(data => {
    console.log('then : ', data);
    return 20;
  })
  .catch(data => {
    console.log('catch : ', data);
    return 30;
  })
  .then(data => {
    console.log('then2 : ', data);
  });

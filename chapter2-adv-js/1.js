function square(number, number2) {
  console.log('arguments', arguments);
  console.log('this', this);

  return number * number2;
}

square(2, 3);

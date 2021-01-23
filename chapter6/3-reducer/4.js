import React from 'react';
import produce from 'immer';

const prevState = {
  user: {
    name: 'mike',
    friends: [
      { name: 'jane', age: 23 },
      { name: 'cole', age: 22 },
    ],
  },
  products: [],
};

const nextState = produce(prevState, draft => {
  draft.user[0].age = 32;
});

console.log('prevState === nextState :', prevState === nextState);
console.log(
  'prevState.user.friend[0] === nextState.user.friend[0] :',
  prevState.user.friend[0] === nextState.user.friend[0],
);
console.log(
  'prevState.user.friend[1] === nextState.user.friend[1] :',
  prevState.user.friend[1] === nextState.user.friend[1],
);
console.log(
  'prevState.products === nextState.products :',
  prevState.products === nextState.products,
);

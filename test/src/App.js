import React from 'react';
import { createStore, applyMiddleware } from 'redux';

export default function App() {
  return <div>test</div>;
}
const saveToLocalStorage = store => next => action => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};

const myReducer = (state = { name: 'kirok' }, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') {
    return { name: 'changed' };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({
  type: 'someAction',
  title: 'something',
  meta: { localStorageKey: '13123' },
});

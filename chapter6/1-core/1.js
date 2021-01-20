import React, { useContext, createContext, useReducer } from 'react';

const AppContext = createContext({});
ß;
const DispatchContext = createContext(() => {});

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <AppContext.Provider value={state}>
        <DispatchContext.Provider value={state}>
          <User />
          <Product />
        </DispatchContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

const INITIAL_STATE = { user: { name: 'mike' }, product: { name: 'iphone' } };

function reducer(state, action) {
  switch (action.type) {
    case 'setUserName':
      return { ...state, user: { name: action.name } };
  }
}

function User() {
  console.log('user render');
  const { user } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button onClick={() => dispatch({ type: 'setUserName', name: 'john' })}>
        사용자 이름 수정
      </button>
    </div>
  );
}

function Product() {
  console.log('Product render');
  const { product } = useContext(AppContext);
  return <p>{`${product.name}`}</p>;
}

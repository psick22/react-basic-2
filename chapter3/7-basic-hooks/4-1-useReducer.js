import React, { useReducer } from 'react';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type='text'
        value={state.name}
        onChange={e =>
          dispatch({ type: 'setName', name: e.currentTarget.value })
        }
      />
      <input
        type='number'
        value={state.age}
        onChange={e => dispatch({ type: 'setAge', age: e.currentTarget.value })}
      />
    </div>
  );
};

const INITIAL_STATE = {naem:'empty', age:0};
const MAX_AGE = 50;

function reducer(state, action){
    switch(state, action){
        case 'setName':
            return {...state, name = state.name};
        case 'setAge':
            if(action.age > MAX_AGE){
                return { ...state, age :MAX_AGE};
            }
            return {...state, age = state.age};
    }
}
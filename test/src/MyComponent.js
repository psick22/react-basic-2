import React from 'react';

function MyComponent({ value1, value2 }) {
  console.log('mycomponent render');
  return (
    <div>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
    </div>
  );
}
function isEqual(prevProps, nextProps) {
  return prevProps.value1 === nextProps.value1;
}

export default React.memo(MyComponent, isEqual);

const todos = [1, 2, 3];
todos.push(4);

prevTodos.length === nextTodos.length;
prevTodos[0] === nextTodos[0];
prevTodos[1] === nextTodos[1];
prevTodos[2] === nextTodos[2];

const nextTodos = [...todos, 4];

prevTodos === nextTodos;

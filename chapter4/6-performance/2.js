import React, { useState } from 'react';
import MyComponent from './MyComponent';

export default function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue1(value2 + 1)}>value2 증가</button>
      <MyComponent value1={value1} value2={value2} />
    </div>
  );
}

import React, { useState } from 'react';
import Title from './Title';

export default function Counter() {
  const [count, setCount] = useState({ value: 0 });

  function onClick() {
    count.value += 1;
    setCount(count);
  }

  return (
    <div>
      <Title title={`현재 카운트 : ${count.value}`} />
      <button onClick={onClick}>증가</button>
    </div>
  );
}

React.DOM.createPortal(
  <div>
    <p>포탈</p>
  </div>,
  document.getElementById('다른 html 엘리먼트 id'),
);

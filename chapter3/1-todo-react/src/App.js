import React, { useState } from 'react';
imp;

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);

  function onAdd() {
    const todo = {
      id: currentId,
      desc: desc,
    };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  }

  function onSaveToServer() {}
  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h3>할 일 목록</h3>
      <input type='text' value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={onAdd}>추가</button>
      <button onClick={onSaveToServer}>서버에 저장</button>
      <button
        onClick={e => {
          setShowOdd(!showOdd);
        }}
      >
        홀수 목록만 보기
      </button>
      <ul>
        {todoList
          .filter((_, index) => (showOdd ? index % 2 === 0 : true)) //showOdd가 true일때는 index짝수일 때만 true 반환, false 일때는 모두 true 반환
          .map(todo => (
            <li key={todo.id}>
              {todo.id} : {todo.desc}
              <button data-id={todo.id} onClick={onDelete}>
                삭제
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

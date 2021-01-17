function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(['apple', 'orange', 'banana']);
  const [newFruit, setNewFruit] = useState('');
  function addNewFruit() {
    setFruits([...fruits, newFruit]);
    setNewFruit('');
  }
  // ...
  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      <input
        type='text'
        value={newFruit}
        onChange={e => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
    </div>
  );
}

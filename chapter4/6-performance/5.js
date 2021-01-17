function Parent() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`count : ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectedFruit selected={selectedFruit} onChange={setSelectedFruit} />
    </div>
  );
}

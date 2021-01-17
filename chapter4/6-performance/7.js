function SelectFruit({ selectedFruit, onChange }) {
  //...

  return (
    <div>
      <Select
        options={[
          { name: 'apple', price: 500 },
          { name: 'orange', price: 1000 },
          { name: 'orange', price: 1500 },
        ]}
        selected={selectedFruit}
        onChange={onChange}
      />
      {/* {} */}
    </div>
  );
}

function SelectFruit({ selectedFruit, onChange }) {
  //...
  const [maxPrice, setMaxPrice] = useState(1000);
  const fruits = useMemo(() => FRUITS.filter(item => item.price <= maxPrice), [
    maxPrice,
  ]);

  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      {/* {} */}
    </div>
  );
}

const FRUITS = [
  { name: 'apple', price: 500 },
  { name: 'orange', price: 1000 },
  { name: 'orange', price: 1500 },
];

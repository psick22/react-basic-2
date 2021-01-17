import React from 'react';

export default function NumberSelector({ number, options, label, onChange }) {
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    onChange(value);
  }
  return (
    <div>
      <select onChange={onChangeOption} value={number}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {label}
    </div>
  );
}

import React from 'react';
import './Box.css';

export default function Box({ size }) {
  if (size === 'big') {
    return <button className='box big'>큰 박스</button>;
  } else {
    return <button className='box small'>작은 박스</button>;
  }
}

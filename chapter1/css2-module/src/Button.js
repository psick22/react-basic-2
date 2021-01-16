import React from 'react';
import Style from './Button.module.css';
import cn from 'classnames';

export default function Button({ size }) {
  const isBig = size === 'big';

  return (
    <button
      className={cn(Style.button, {
        [Style.big]: isBig,
        [Style.small]: !isBig,
      })}
    >
      {isBig ? '큰버튼' : '작은버튼'}
    </button>
  );
}

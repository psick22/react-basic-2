import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  useEffect(() => {});

  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
  }, [width]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: 'green' }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 500);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}

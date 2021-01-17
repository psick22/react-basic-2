import React, { useState } from 'react';
import useChangeAppState, {
  STATE_RUNNING,
  STATE_START,
} from './useChangeAppState';

export default function App() {
  const [state, next] = useChangeAppState(true);
  const msg =
    state === STATE_START
      ? '앱 시작'
      : state === STATE_RUNNING
      ? '앱 실행중'
      : '앱 종료';
  return (
    <div>
      <p>{msg}</p>
      <button onClick={next}>next</button>
    </div>
  );
}

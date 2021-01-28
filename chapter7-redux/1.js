import { useSelector, shallowEqual } from 'react-redux';

function useMySelector(selector) {
  return useSelector(selector, shallowEqual);
}

function MyComponent() {
  const [value1, value2] = useMySelector(state => [state.value1, state.value2]);
  const value3 = useMySelector(state => state.value3); //값으로 반환하면 shallowEqual 이 value3의 모든 속성값을 다 비교하게되어 비효율적
  const [value4] = useMySelector(state => [state.value4]); // 커스텀 훅을 사용할 때는 값을 하나만 반환하더라도 배열로 반환하는 것이 효율적
}

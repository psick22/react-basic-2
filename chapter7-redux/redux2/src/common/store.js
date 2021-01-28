import { createStore, combineReducers } from 'redux';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

// 여러개의 리듀서를 하나로 합침 (combineReducer)
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// combine 리듀서로 스토어 생성해서 사용
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); // redux devtools extension

export default store;

import React from 'react';
import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state';
import { addFriend, removeFriend, editFriend } from './friend/state';
import store from './common/store';

store.dispatch(addTimeline({ id: 1, desc: '테스트 해보자' }));
store.dispatch(addTimeline({ id: 2, desc: '두번째, 리덕스 헷갈림' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '두번째꺼 수정' }));
store.dispatch(removeTimeline({ id: 1, desc: '테스트 해보자' }));

store.dispatch(addFriend({ id: 1, name: '아이유' }));
store.dispatch(addFriend({ id: 2, name: '수지' }));
store.dispatch(editFriend({ id: 2, name: '박보영' }));
store.dispatch(removeFriend({ id: 1, name: '아이유' }));

export default function App() {
  return <div>리듀서 테스트</div>;
}

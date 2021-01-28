import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { actions } from '../state/index';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeShowLimit,
  getFriendsWithAgeLimit,
} from '../state/selector';
import FriendList from '../component/FriendList';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

export default function FriendMain() {
  // react-redux Provider를 사용하면 useSelector로 스토어의 데이터를 가져올 수 있다
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithShowLimit,
  ] = useSelector(
    state => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual,
  );
  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend();
    dispatch(actions.addFriend(friend));
  }

  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix='세 이하만 보기'
        onChange={v => dispatch(actions.setValue('ageLimit', v))}
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix='명 이하만 보기 (연령 제한 적용)'
        onChange={v => dispatch(actions.setValue('showLimit', v))}
      />
      <FriendList friends={friendsWithShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

import React, { useState } from 'react';
import { getNextFriend } from '../../data';
import FriendList from '../component/FriendList';
import NumberSelector from '../component/NumberSelector';

export default function FriendsPage() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLenLimit, setNameLenLimit] = useState(MAX_NAME_LEN_LIMIT);

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  const friendsWithNameLenLimit = friends.filter(
    item => item.name.length <= nameLenLimit,
  );

  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelector
        number={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label='세 이하만보기'
        onChange={setAgeLimit}
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelector
        number={nameLenLimit}
        options={NAME_LEN_LIMIT_OPTIONS}
        label='글자 이하만보기'
        onChange={setNameLenLimit}
      />
      <FriendList friends={friendsWithNameLenLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

const MAX_NAME_LEN_LIMIT = 4;
const NAME_LEN_LIMIT_OPTIONS = [1, 2, 3, MAX_NAME_LEN_LIMIT];

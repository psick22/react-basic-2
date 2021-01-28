import { createSelector } from 'reselect';

// 선택자 함수를 추가
const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

// createSelector함수를 이용해서 선택자 함수를 만들면 메모이제이션 기능이 동작한다.
export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit called');
    return friends.filter(item => item.age <= ageLimit);
  },
);

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit called');
    return friendsWithAgeLimit.slice(0, showLimit);
  },
);

import { all, call, put, takeLeading } from 'redux-saga/effects'; // 부수효과
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

// request_like action이 발생할 때마다 아래 fetchData를 수행
// put : 리덕스 액션을 발생시킨다 -> setLoading으로 isLoading을 true로 바꾸고 처리를 한뒤에 다시 false로 바꿈
// addLike 액션을 발생시켜서 API를 호출하기전에 positive방식으로(api성공했다고 가정하고 미리 반영하는 방식) like카운트를 하나 증가
// api를 호출하고 api가 끝나면 isLoading을 false로바꿈
export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  //takeLeading : action 이 발생했을 때, 두번째 인자로 전달해준 함수를 실행해준다 (saga의 메서드)
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}

import { all, call, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../common/util/api';
import { makeFetchSaga } from '../../common/util/fetch';
import { actions, Types } from './index';

function* fetchUser({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword: name },
  });
  if (isSuccess && data) {
    const user = data.find(item => item.name === name);
    if (user) {
      yield put(actions.setValue('user', user));
    }
  }
}

export default function* () {
  yield all([
    takeEvery(
      Types.FetchUser,
      makeFetchSaga({ fetchSaga: fetchUser, canCache: false }),
    ),
  ]); // fetchuser 사가 함수
}
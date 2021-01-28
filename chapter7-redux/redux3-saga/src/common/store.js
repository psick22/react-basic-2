import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import timelineReducer from '../timeline/state';
import timelineSaga from '../timeline/state/saga';
import friendReducer from '../friend/state';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// 여러개의 리듀서를 하나로 합침 (combineReducer)
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

// combine 리듀서로 스토어 생성해서 사용
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.()); // redux devtools extension

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;

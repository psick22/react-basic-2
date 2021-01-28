// 사가의 부수효과함수는 해야할일을 설명하는 자바스크립트 객체를 반환한다.
// 반환된 객체는 yield를 호출했을 때, 사가 미들웨어에게 전달된다
// 리덕스의 미들웨어에서 사가 미들웨어가 돌아가고 사가 미들웨어는 부수효과 객체가 설명하는 일을 한 후에
// 결과와 함께 실행흐름을 다시 제너레이터로 넘겨줌
const a = take(types.REQUEST_LIKE);
const b = put(actions.setLoading(false));
const c = call(callApiLike);
console.log({ a, b, c });
const logResult = {
  a: {
    TAKE: {
      pattern: 'timeline/REQUEST_LIKE',
    },
  },
  b: {
    PUT: {
      channel: null,
      action: {
        type: 'timeline/SET_LOADING',
        isLoading: false,
      },
    },
  },
  c: {
    CALL: {
      context: null,
      fn: callApiLike,
      args: [],
    },
  },
};

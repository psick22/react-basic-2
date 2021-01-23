import produce from 'immer';

function createReducer(state = INITIAL_STATE, handlerMap) {
  return function (state = INITIAL_STATE, action) {
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

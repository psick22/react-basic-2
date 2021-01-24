import { observable, action, computed, makeObservable, toJS } from 'mobx';

class MobxStore {
  constructor() {
    makeObservable(this);
  }
  @observable
  _keyword = '';
  get keyword() {
    return this._keyword;
  }

  @observable
  _autoCompletes = [];
  get autoCompletes() {
    return this._autoCompletes;
  }
}

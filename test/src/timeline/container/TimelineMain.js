import React from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state/index';
import TimelineList from '../component/TimelineList';
import { useDispatch, useSelector } from 'react-redux';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector(state => state.timeline.timelines);
  const isLoading = useSelector(state => state.timeline.isLoading);
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find(item => item.id === id);
    console.log(timeline);

    dispatch(actions.requestLike(timeline));
  }

  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송 중</p>}
    </div>
  );
}

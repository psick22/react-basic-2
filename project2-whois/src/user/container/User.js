import React, { useEffect } from 'react';
import {
  Col,
  Descriptions,
  PageHeader,
  Row,
  Space,
  Spin,
  Typography,
} from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions, Types } from '../state';
import useFetchInfo from '../../common/hook/useFetchInfo';
import Department from './Department';
import History from '../../common/component/History';
import TagList from './TagList';
import FetchLabel from '../component/FetchLabel';

/**
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
export default function User({ match }) {
  // Route 컴포넌트를 통해서 렌더링 되는 컴포넌트에는 항상 match 속성값이 전달된다.
  // '/user/:name' 으로 name을 파라미터로 받아왔음 => match.params.name 로 전달됨
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userHistory = useSelector(state => state.user.userHistory);
  const name = match.params.name;

  useEffect(() => {
    dispatch(actions.fetchUser(name)); // user 값이 변경되면 user 정보를 받아오는 API를 호출하는 useEffect
    dispatch(actions.fetchUserHistory(name)); // user History 정보를 받아오는 API를 호출, 이 API는 리덕스에 user history를 저장한다
  }, [dispatch, name]);

  const { isFetched, isSlow } = useFetchInfo(Types.FetchUser);
  // action type을 매개변수로 입력하면 해당 액션의 상태값을 반환하는 속성값이

  return (
    <Row justify='center'>
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={history.goBack}
          title={
            <FetchLabel label='사용자 정보' actionType={Types.FetchUser} />
          }
        >
          {user && (
            <Descriptions layout='vertical' bordered column={1}>
              <Descriptions.Item label='이름'>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label='소속'
                    actionType={Types.FetchUpdateUser}
                    fetchKey='department'
                  />
                }
              >
                <Department />
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLabel
                    label='태그'
                    actionType={Types.FetchUpdateUser}
                    fetchKey='tag'
                  />
                }
              >
                <TagList />
              </Descriptions.Item>
              <Descriptions.Item label='수정 내역'>
                <History items={userHistory} />
              </Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}

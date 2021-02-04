import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Space, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../state';
import { actions as userActions } from '../../user/state';

export default function SearchInput() {
  const keyword = useSelector(state => state.search.keyword);
  const dispatch = useDispatch();

  function setKeyword(value) {
    if (value !== keyword) {
      console.log(autoCompletes, 1);
      console.log(keyword);

      dispatch(actions.setValue('keyword', value));
      dispatch(actions.fetchAutoComplete(value));
    }
  }

  const autoCompletes = useSelector(state => state.search.autoCompletes);

  const history = useHistory();
  function goToUser(value) {
    const user = autoCompletes.find(item => item.name === value);
    if (user) {
      dispatch(userActions.setValue('user', user));
      history.push(`/user/${user.name}`);
    }
  }

  return (
    <>
      <AutoComplete
        value={keyword}
        onChange={setKeyword}
        onSelect={goToUser}
        autoFocus
        dropdownClassName='certain-category-search-dropdown'
        dropdownMatchSelectWidth={500}
        style={{
          width: '100%',
        }}
        options={autoCompletes.map(item => ({
          value: item.name,
          label: (
            <Space>
              <Typography.Text strong>{item.name}</Typography.Text>
              <Typography.Text type='secondary'>
                {item.department}
              </Typography.Text>
              <Typography.Text>{item.tag}</Typography.Text>
            </Space>
          ),
        }))}
      >
        <Input.Search
          size='large'
          placeholder='무엇을 찾고 있니?'
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </>
  );
}

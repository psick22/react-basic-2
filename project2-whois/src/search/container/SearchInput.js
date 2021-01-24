import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export default function SearchInput() {
  const keyword = useSelector(state => state.search.keyword);
  function setKeyword(value) {
    //
  }
  function gotoUser(value) {}
  return (
    <>
      <AutoComplete
        value={keyword}
        onChange={setKeyword}
        onSelect={gotoUser}
        dropdownClassName='certain-category-search-dropdown'
        dropdownMatchSelectWidth={500}
        style={{
          width: '100%',
        }}
        options={[]}
        autoFocus
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

import { Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { SettingFilled } from '@ant-design/icons';

// Props 타입 정리 (JS도구)
/**
 *  @param {object} param
 *  @param {()=>void} param.logout
 */

export default function Settings({ logout }) {
  return (
    <div>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item onClick={logout}>로그아웃</Menu.Item>
          </Menu>
        }
        trigger={['click']}
        placement='bottomRight'
      >
        <Button shape='circle' icon={<SettingFilled />} />
      </Dropdown>
    </div>
  );
}

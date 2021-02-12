import { Col, Form, Row, Typography } from 'antd';
import React from 'react';

/**
 *
 * @param {object} param
 * @param {()=>void)} param.onFinish
 * @param {import('react').ReactNode} param.children
 */

export default function AuthLayout({ children, onFinish }) {
  return (
    <>
      <Row justify='center' style={{ marginTop: 10 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'PilGi' }}>
            찾아야한다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Form
            name='normal_login'
            initialValues={{ remember: true }}
            style={{ width: 300, marginTop: 50 }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
}

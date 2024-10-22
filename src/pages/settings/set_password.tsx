import React from 'react';
import { Button, Form, Input } from 'antd';

type FieldType = {
  old?: string;
  new?: string;
  confirm?: string;
};

const App: React.FC = () => (
  <>
  <h2>Set Password</h2>
  <Form
    name="basic"
    style={{ maxWidth: 400 }}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Old Password"
      name="old"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="New Password"
      name="new"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Confirm Password"
      name="confirm"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
);

export default App;
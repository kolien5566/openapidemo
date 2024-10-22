import React from 'react';
import { Button, Form, Input } from 'antd';

type FieldType = {
  name?: string;
};

const App: React.FC = () => (
  <>
  <h2>Set Organization Name</h2>
  <Form
    name="basic"
    style={{ maxWidth: 400 }}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Organization Name"
      name="name"
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
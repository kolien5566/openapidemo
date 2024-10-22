import React from 'react';
import { Button, Form, Input } from 'antd';

type FieldType = {
  day?: string;
  month?: string;
};

const App: React.FC = () => (
  <>
  <h3>Daily usage: $5</h3>
  <Form
    name="basic"
    style={{ maxWidth: 400 }}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Set Daily limit"
      name="day"
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
  <h3>Monthly usage: $20</h3>
  <Form
    name="basic"
    style={{ maxWidth: 400 }}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Set Monthly limit"
      name="month"
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
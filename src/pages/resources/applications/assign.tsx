import React from "react";
import { Checkbox, Col, Divider, Form, Input, Modal, Row, Tabs } from "antd";
import type { TabsProps } from "antd";

interface ModalProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

type FieldType = {
  name?: string;
};

const APIComponent: React.FC = () => {
  return (
    <Checkbox.Group style={{ width: "100%" }}>
      <Col>
        <Row>
          <Checkbox value="A">API A</Checkbox>
        </Row>
        <Row>
          <Checkbox value="B">API B</Checkbox>
        </Row>
        <Row>
          <Checkbox value="C">API C</Checkbox>
        </Row>
      </Col>
    </Checkbox.Group>
  );
};

const DeviceComponent: React.FC = () => {
  return (
    <Checkbox.Group style={{ width: "100%" }}>
      <Col>
        <Row>
          <Checkbox value="A">Device A</Checkbox>
        </Row>
        <Row>
          <Checkbox value="B">Device B</Checkbox>
        </Row>
        <Row>
          <Checkbox value="C">Device C</Checkbox>
        </Row>
      </Col>
    </Checkbox.Group>
  );
};

const MemberComponent: React.FC = () => {
  return (
    <Checkbox.Group style={{ width: "100%" }}>
      <Col>
        <Row>
          <Checkbox value="A">Member A</Checkbox>
        </Row>
        <Row>
          <Checkbox value="B">Member B</Checkbox>
        </Row>
        <Row>
          <Checkbox value="C">Member C</Checkbox>
        </Row>
      </Col>
    </Checkbox.Group>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "API",
    children: <APIComponent />,
  },
  {
    key: "2",
    label: "Device",
    children: <DeviceComponent />,
  },
  {
    key: "3",
    label: "Member",
    children: <MemberComponent />,
  },
];

const App: React.FC<ModalProps> = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title="Application Config"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form name="basic" style={{ maxWidth: 400 }} autoComplete="off">
        <Form.Item<FieldType>
          label="Application Name"
          name="name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Tabs defaultActiveKey="1" items={items} />
    </Modal>
  );
};

export default App;

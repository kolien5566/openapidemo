import React from "react";
import { Form, Input, Modal, Select } from "antd";

interface ModalProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

type FieldType = {
  email?: string;
  level?: string;
};

const App: React.FC<ModalProps> = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title="Invite a new member"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form name="basic" style={{ maxWidth: 400 }} autoComplete="off">
        <Form.Item<FieldType>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Access Level"
          name="level"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            options={[
              { value: "Owner", label: "Owner" },
              { value: "Editor", label: "Editor" },
              { value: "Reader", label: "Reader" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default App;

import React from "react";
import { Form, Input, Modal, Select } from "antd";

interface ModalProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

type FieldType = {
  sn?: string;
  checkCode?: string;
};

const App: React.FC<ModalProps> = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title="Bind a new system"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form name="basic" style={{ maxWidth: 400 }} autoComplete="off">
        <Form.Item<FieldType>
          label="SN"
          name="sn"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Check Code"
          name="checkCode"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default App;

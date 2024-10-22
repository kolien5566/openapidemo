import React from "react";
import { Checkbox, Col, Modal, Row } from "antd";

interface ModalProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const App: React.FC<ModalProps> = ({ isOpen, onOk, onCancel }) => {
  return (
    <Modal
      title="Assign the member to projects"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Checkbox.Group style={{ width: "100%" }}>
        <Col>
          <Row>
            <Checkbox value="default">Default Project</Checkbox>
          </Row>
          <Row>
            <Checkbox value="A">Project A</Checkbox>
          </Row>
          <Row>
            <Checkbox value="B">Project B</Checkbox>
          </Row>
          <Row>
            <Checkbox value="C">Project C</Checkbox>
          </Row>
          <Row>
            <Checkbox value="D">Project D</Checkbox>
          </Row>
        </Col>
      </Checkbox.Group>
    </Modal>
  );
};

export default App;

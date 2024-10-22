import React, { useState } from "react";
import { Input, Button, Row, Col, Table, Space, Modal } from "antd";
import { ApiOutlined, SearchOutlined } from "@ant-design/icons";
import BindModal from "./bind_devices.tsx";
import ProjectModal from "./assign_application.tsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Operation",
      key: "operation",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={showModal2}>
            Assign Projects
          </Button>
          <Button type="link">Unbind</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sn: "ALA0010210400211",
      status: "Online",
    },
    {
      key: "2",
      sn: "ALD001022222220",
      status: "Offline",
    },
    {
      key: "3",
      sn: "AE3100517019527",
      status: "Fault",
    },
  ];

  return (
    <>
      <h2>Devices</h2>
      <Row
        justify="space-between"
        align="middle"
        style={{ width: "100%", marginBottom: 15 }}
      >
        <Col>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            style={{ width: 300 }}
          />
        </Col>
        <Col>
          <Button type="primary" icon={<ApiOutlined />} onClick={showModal}>
            Bind
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} pagination={false} />
      <BindModal
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <ProjectModal
        isOpen={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      />
    </>
  );
};
export default App;

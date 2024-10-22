import React, { useState } from "react";
import { Input, Button, Row, Col, Table, Space, notification } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import Assign from "./assign.tsx";

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

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Application secret key is copied to clipboard.',
      duration: 0,
    });
  };

  const columns = [
    {
      title: "Application Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Application Secret",
      dataIndex: "secret",
      key: "secret",
    },
    {
      title: "Operation",
      key: "operation",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={openNotification}>Copy secret</Button>
          <Button type="link" onClick={showModal}>
            Edit
          </Button>
          <Button type="link">Deactivate</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Application A",
      secret: "ABCD-XXXXXX-XYZ",
    },
    {
      key: "2",
      name: "Application B",
      secret: "ABCD-XXXXXX-XYZ",
    },
    {
      key: "3",
      name: "Application C",
      secret: "ABCD-XXXXXX-XYZ",
    },
  ];

  return (
    <>
      <h2>Applications</h2>
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
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Create
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Assign
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      {contextHolder}
    </>
  );
};
export default App;

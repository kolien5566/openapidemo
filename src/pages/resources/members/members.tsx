import React, { useState } from "react";
import {
  Input,
  Button,
  Row,
  Col,
  Table,
  Space,
  Modal,
  notification,
} from "antd";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import InviteModal from "./invite.tsx";
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

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "User secret key is copied to clipboard.",
      duration: 0,
    });
  };

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Access Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "User Secret",
      dataIndex: "secret",
      key: "secret",
    },
    {
      title: "Operation",
      key: "operation",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={openNotification}>
            Copy secret
          </Button>
          <Button type="link" onClick={showModal2}>
            Assign Projects
          </Button>
          <Button type="link">Edit</Button>
          <Button type="link">Deactivate</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      user: "Me",
      level: "Owner",
      secret: "ABCD-XXXXXX-XYZ",
    },
    {
      key: "2",
      user: "UserA",
      level: "Editor",
      secret: "ABCD-XXXXXX-XYZ",
    },
    {
      key: "3",
      user: "UserB",
      level: "Reader",
      secret: "ABCD-XXXXXX-XYZ",
    },
  ];

  return (
    <>
      <h2>Members</h2>
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
          <Button type="primary" icon={<UserAddOutlined />} onClick={showModal}>
            Invite
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} pagination={false} />
      <InviteModal
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <ProjectModal
        isOpen={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      />
      {contextHolder}
    </>
  );
};
export default App;

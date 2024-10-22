import React, { useState } from "react";
import { Layout, Avatar, Space, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const NavHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Header 
      style={{ 
        backgroundColor: "white", 
        padding: 0, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
            height: "64px", // antd默认的Header高度
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#2d3748",
            }}
          >
            AlphaESS OpenAPI
          </Link>

          <Popover
            content={
              <>
                <div><a onClick={hide}>My Own</a></div>
                <div><a onClick={hide}>Organization A</a></div>
                <div><a onClick={hide}>Organization B</a></div>
                <div><a onClick={hide}>Organization C</a></div>
              </>
            }
            title="Select your organization"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Avatar icon={<UserOutlined />} />
          </Popover>
        </Space>
      </div>
    </Header>
  );
};

export default NavHeader;

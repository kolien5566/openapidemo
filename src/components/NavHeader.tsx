import React from "react";
import { Layout, Avatar, Space } from "antd";
import { UserOutlined, BilibiliOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const NavHeader: React.FC = () => {
  return (
    <Header style={{ backgroundColor: '#f5f5f5', padding: 0 }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
        <Space style={{ width: '100%', justifyContent: 'space-between', height: '4rem' }}>
          <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748' }}>
            <BilibiliOutlined style={{ fontSize: '32px' }}/>
          </Link>
          <Avatar icon={<UserOutlined />} />
        </Space>
      </div>
    </Header>
  );
};

export default NavHeader;

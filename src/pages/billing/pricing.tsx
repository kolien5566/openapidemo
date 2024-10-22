import React from 'react';
import { Table } from 'antd';

const App = () => {
  const columns = [
    {
      title: '版本权益',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: '免费体验版',
      dataIndex: 'free',
      key: 'free',
    },
    {
      title: '旗舰版',
      dataIndex: 'premium',
      key: 'premium',
    },
    {
      title: '行业版',
      dataIndex: 'enterprise',
      key: 'enterprise',
    },
  ];

  const data = [
    {
      key: '1',
      feature: '基础资源包(每月)',
      free: '3 万次 API 调用\n14 万条消息',
      premium: '3.9 亿次 API 调用\n16.8 亿条消息',
      enterprise: '8.3 亿次 API 调用\n35.7 亿条消息',
    },
    {
      key: '2',
      feature: '数据中心',
      free: '1个',
      premium: '全部 6 个',
      enterprise: '全部 6 个',
    },
    {
      key: '3',
      feature: '设备数',
      free: '50 台',
      premium: '7.5 万台',
      enterprise: '20 万台',
    },
  ];

  return (
    <>
      <h2>Pricing</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
);
  
};

export default App;

import React from 'react';
import { Table } from 'antd';

const App = () => {
  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'Free',
      dataIndex: 'free',
      key: 'free',
    },
    {
      title: 'Premium',
      dataIndex: 'premium',
      key: 'premium',
    },
    {
      title: 'Enterprise',
      dataIndex: 'enterprise',
      key: 'enterprise',
    },
  ];

  const data = [
    {
      key: '1',
      feature: 'Monthly Resources',
      free: '2000 API calls',
      premium: '40 million API calls',
      enterprise: '80 million API calls',
    },
    {
      key: '2',
      feature: 'Data Centers',
      free: '1 center',
      premium: 'All 6 centers',
      enterprise: 'All 6 centers',
    },
    {
      key: '3',
      feature: 'Number of Devices',
      free: '50 devices',
      premium: '7500 devices',
      enterprise: '50000 devices',
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

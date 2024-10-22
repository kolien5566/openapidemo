import React from "react";
import { Table } from "antd";

const App = () => {
  const columns = [
    {
      title: "Invoice",
      dataIndex: "Invoice",
      key: "Invoice",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
    },
    {
      title: "Created",
      dataIndex: "Created",
      key: "Created",
    },
  ];

  const data = [
    {
      key: "1",
      Invoice: "XXXXXX-0001",
      Status: "Paid",
      Amount: "$10",
      Created: "2024-10-01",
    },
    {
      key: "2",
      Invoice: "XXXXXX-0002",
      Status: "Paid",
      Amount: "$20",
      Created: "2024-10-01",
    },
    {
      key: "3",
      Invoice: "XXXXXX-0003",
      Status: "Paid",
      Amount: "$30",
      Created: "2024-10-01",
    },
  ];

  return (
    <>
      <h2>Billing History</h2>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
export default App;

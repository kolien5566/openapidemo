import { Button, Card, Divider, Space } from "antd";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <h2>Pay as you go</h2>
      <Space direction="vertical">
        <Card title="Credit Balance" bordered={false} style={{ width: 400 }}>
          <h2>$100 <Button type="primary">Recharge</Button></h2>
        </Card>
        <Divider></Divider>
        <Card title="Payment Methods" bordered={false} style={{ width: 400 }}>
          <h2>Cards / Paypal / Strip</h2>
        </Card>
      </Space>
    </>
  );
};

export default App;

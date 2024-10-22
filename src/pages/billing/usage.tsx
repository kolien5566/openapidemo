import React from "react";
import { Row, Col, Card } from "antd";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ApiOutlined,
  ProjectOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  // 模拟数据
  const apiUsageData = [
    { name: "Jan", calls: 4000 },
    { name: "Feb", calls: 3000 },
    { name: "Mar", calls: 2000 },
    { name: "Apr", calls: 2780 },
    { name: "May", calls: 1890 },
    { name: "Jun", calls: 2390 },
  ];

  const projectUsageData = [
    { name: "Project A", value: 400 },
    { name: "Project B", value: 300 },
    { name: "Project C", value: 300 },
    { name: "Project D", value: 200 },
  ];

  const userActivityData = [
    { name: "Mon", active: 120, inactive: 20 },
    { name: "Tue", active: 132, inactive: 18 },
    { name: "Wed", active: 101, inactive: 29 },
    { name: "Thu", active: 134, inactive: 16 },
    { name: "Fri", active: 90, inactive: 40 },
  ];

  const costData = [
    { name: "Jan", cost: 4000 },
    { name: "Feb", cost: 3000 },
    { name: "Mar", cost: 2000 },
    { name: "Apr", cost: 2780 },
    { name: "May", cost: 1890 },
    { name: "Jun", cost: 2390 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            title={
              <>
                <ApiOutlined /> API Usage
              </>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={apiUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="calls" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <>
                <ProjectOutlined /> Project Usage
              </>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={projectUsageData}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <>
                <UserOutlined /> User Activity
              </>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="active" fill="#8884d8" />
                <Bar dataKey="inactive" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <>
                <DollarOutlined /> Cost Overview
              </>
            }
          >
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="cost"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

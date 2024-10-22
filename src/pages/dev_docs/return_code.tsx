import React from "react";
import { Table } from "antd";

const ReturnCodeTable = () => {
  const columns = [
    {
      title: "Return Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  const data = [
    {
      key: "1",
      code: "103",
      description:
        "TimeStamp error. Please refer to the website for specific time stamp acquisition: https://tool.lu/timestamp/",
    },
    {
      key: "2",
      code: "200",
      description: "Success",
    },
    {
      key: "3",
      code: "400",
      description: "Operation failed",
    },
    {
      key: "4",
      code: "6001",
      description: "API key can not be empty",
    },
    {
      key: "5",
      code: "6002",
      description: "Timestamp can not be empty",
    },
    {
      key: "6",
      code: "6003",
      description: "Sign can not be empty",
    },
    {
      key: "7",
      code: "6004",
      description: "Parameter Error",
    },
    {
      key: "8",
      code: "6005",
      description: "No permission",
    },
    {
      key: "9",
      code: "6006",
      description: "Groupkey does not exist",
    },
    {
      key: "10",
      code: "6007",
      description: "No such system in this Group",
    },
    {
      key: "11",
      code: "6008",
      description: "Api Key is Wrong",
    },
    {
      key: "12",
      code: "6009",
      description: "Sign is Wrong",
    },
  ];

  return (
    <>
      <h1>Return Code Description</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
export default ReturnCodeTable;

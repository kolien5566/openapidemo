import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    label: "Dashboard",
  },
  {
    key: "workbench",
    label: "Workbench",
  },
  {
    type: "divider",
  },
  {
    key: "api_reference",
    label: "API Reference",
    children: [
      {
        key: "group1",
        label: "group 1",
        type: "group",
        children: [
          { key: "api", label: "Acquire Running Data" },
          { key: "api2", label: "Send Dispatch Commands" },
        ],
      },
      {
        key: "group2",
        label: "group 2",
        type: "group",
        children: [
          { key: "api3", label: "API 3" },
          { key: "api4", label: "API 4" },
        ],
      },
      {
        key: "group3",
        label: "group 3",
        type: "group",
        children: [
          { key: "api6", label: "API 6" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "dev_docs",
    label: "Dev Docs",
    children: [
      { key: "quickstart", label: "Quickstart" },
      { key: "changelog", label: "Changelog" },
      { key: "terms&policies", label: "Terms & Policies" },
      {
        key: "guides",
        label: "Guides",
        type: "group",
        children: [
          { key: "csip_implementation", label: "CSIP Implementation" },
          { key: "vpp_implementation", label: "VPP Implementation" },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    children: [
      { key: "projects", label: "Projects" },
      { key: "devices", label: "Devices" },
      { key: "members", label: "Members" },
    ],
  },
  {
    key: "billing",
    label: "Billing",
    children: [
      { key: "balance", label: "Balance" },
      { key: "pricing", label: "Pricing" },
      { key: "usage", label: "Usage" },
      { key: "rate_limit", label: "Rate Limit" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    children: [
      { key: "organization_name", label: "Organization Name" },
      { key: "set_language", label: "Set Language" },
      { key: "set_password", label: "Set Password" },
    ],
  },
];

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{
      height: '100%',
      borderRight: 0,
    }}
    items={items}
    onClick={onClick}
  />
  );
};

export default NavMenu;

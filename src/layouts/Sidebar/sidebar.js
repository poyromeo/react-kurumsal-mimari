import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
  MailOutlined,
  CalendarOutlined,
  DotChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch } from "antd";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

function getNavItemLink(key, label) {
  return (
    <NavLink
      style={{
        textDecoration: "none",
      }}
      to={key}
    >
      <span>{label}</span>
    </NavLink>
  );
}

class SidebarCls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
  }

  items = [
    getItem(getNavItemLink("", "HOME"), "/", <HomeOutlined />),
    getItem(
      getNavItemLink("profile", "PROFİLE"),
      "/profile",
      <UsergroupAddOutlined />
    ),
    getItem(
      getNavItemLink("users", "USERS"),
      "/users",
      <UsergroupAddOutlined />
    ),
    getItem(
      getNavItemLink("products", "PRODUCTS"),
      "/products",
      <ShoppingCartOutlined />
    ),
    getItem(
      getNavItemLink("orders", "ORDERS"),
      "/orders",
      <FileDoneOutlined />
    ),
    getItem(getNavItemLink("posts", "POSTS"), "/posts", <MailOutlined />),
    getItem(
      getNavItemLink("calendar", "CALENDAR"),
      "/calendar",
      <CalendarOutlined />
    ),
    getItem(
      getNavItemLink("permissionChart", "PERMİSSİON CHART"),
      "/permissionChart",
      <DotChartOutlined />
    ),
  ];

  OnClick = (e) => {
    console.log("e", e);
  };

  render() {
    return (
      <Sider
        theme={this.props.theme}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme={this.props.theme}
          onClick={this.onClick}
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={this.items}
        />
      </Sider>
    );
  }
}

export default SidebarCls;

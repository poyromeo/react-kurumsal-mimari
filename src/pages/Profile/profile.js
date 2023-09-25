import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;

export default class ProfileCls extends Component {
  render() {
    return (
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Profile Page
      </Content>
    );
  }
}

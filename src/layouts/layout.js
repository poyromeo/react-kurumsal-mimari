import React from "react";
import { Layout, theme } from "antd";
import SidebarCls from "./Sidebar/sidebar";
import HeaderCls from "./Header/header";
import FooterCls from "./Footer/footer";
import ContentCls from "./Content/content";

class LayoutCls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      theme: "dark",
    };
  }

  setCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  changeTheme = (value) => {
    console.log(value);
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  tokenControlFunc = (bool) => {
    console.log("value", bool);
    this.props.tokenControlAppFunc(bool);
  };

  render() {
    return (
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <HeaderCls
          collapsed={this.state.collapsed}
          setCollapsed={this.setCollapsed}
          themeToogle={this.state.theme}
          changeTheme={this.changeTheme}
          tokenControlLayoutFunc={this.tokenControlFunc}
        />
        <Layout hasSider>
          <SidebarCls
            collapsed={this.state.collapsed}
            theme={this.state.theme}
          />
          <ContentCls />
        </Layout>
        <FooterCls />
      </Layout>
    );
  }
}

export default LayoutCls;

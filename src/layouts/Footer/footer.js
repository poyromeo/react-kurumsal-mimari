import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

class FooterCls extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer
        style={{
          padding: 10,
          backgroundColor: "#ccc",
        }}
      >
        Design ©2023 Created by RECEP ORTA
      </Footer>
    );
  }
}

export default FooterCls;

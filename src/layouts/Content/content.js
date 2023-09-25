import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import RoutersCls from "../../routers/routers";
const { Content } = Layout;

class ContentCls extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <RoutersCls />;
  }
}

export default ContentCls;

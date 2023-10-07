import { Layout } from "antd";
import React, { Component } from "react";
import CurrentDataBoxCls from "../../components/CurrentDataBox/informationBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import VerticalBarChartCls from "../../components/VerticalBarChart/verticalBarChart";
import HorizonalBarChartCls from "../../components/HorizonelBarChart/horizonelBarChart";
import AntMiniCalendarCls from "../../components/AntMiniClendar/antMiniCalendar";
const { Content } = Layout;

export default class HomeCls extends Component {
  render() {
    return (
      <Content style={{ overflow: "scroll" }}>
        <Container fluid className="p-4">
          <Row>
            <Col sm={9}>
              <Row>
                <Col className="mb-4">
                  <CurrentDataBoxCls />
                </Col>
                <Col className="mb-4">
                  <CurrentDataBoxCls />
                </Col>
                <Col className="mb-4">
                  <CurrentDataBoxCls />
                </Col>
                <Col className="mb-4">
                  <CurrentDataBoxCls />
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <VerticalBarChartCls />
                </Col>
                <Col className="mb-4">
                  <HorizonalBarChartCls />
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <AntMiniCalendarCls></AntMiniCalendarCls>
            </Col>
          </Row>
        </Container>
      </Content>
    );
  }
}

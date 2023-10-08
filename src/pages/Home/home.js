import { Layout } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AGGridTableCls from "../../components/AGGrid/AgGridTable";
import CurrentDataBoxCls from "../../components/CurrentDataBox/informationBox";
import DoughnutChartCls from "../../components/DoughnutChart/DoughnutChart";
import HorizonalBarChartCls from "../../components/HorizonelBarChart/horizonelBarChart";
import VerticalBarChartCls from "../../components/VerticalBarChart/verticalBarChart";
import * as constans from "../../utils/constants/constants";
import { UseFetch } from "../../services/api";
import HubContext from "../../utils/hooks/UseContext";
const { Content } = Layout;

const HomeCls = () => {
  const { data } = useContext(HubContext);

  return (
    <Content style={{ overflow: "scroll" }}>
      <Container fluid className="p-4">
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
          <Col sm lg="6" className="mb-4">
            <VerticalBarChartCls />
          </Col>
          <Col sm lg="6" className="mb-4">
            <HorizonalBarChartCls />
          </Col>
        </Row>
        <Row>
          <Col sm={8} className="mb-4">
            <AGGridTableCls rowData={data} />
          </Col>
          <Col sm={4} className="mb-4">
            <div className="container-box" style={constans.BOX_SHADOW_BOX}>
              <DoughnutChartCls />
            </div>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default HomeCls;

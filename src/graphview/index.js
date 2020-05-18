import React from "react";
import { connect } from "react-redux";

import FilterPanel from "./filterpanel";
import Own from "./sankey";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";

function GraphView({ data }) {
  console.log(data);
  const preview = data == null || data.nodes == null ? false : true;
  return (
    <div>
      <Card body>
        <strong>Reporting</strong>
      </Card>
      <FilterPanel />
      <Card>
        <Card.Header>
          <strong>Preview</strong>
        </Card.Header>
        <Card.Body>
          <Container>
            {!preview && <Spinner animation="grow" size="lg" />}
            {preview && (
              <Row>
                <Col
                  className="d-none d-xl-block"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Own data={data} width={1100} height={660} edit={false} />
                </Col>
                <Col
                  className="d-none d-lg-block d-xl-none"
                  style={{ backgroundColor: "#f0f0f0" }}
                >
                  <Own data={data} width={900} height={540} edit={false} />
                </Col>
                <Col
                  className="d-none d-md-block d-lg-none"
                  style={{ backgroundColor: "#e8e8e8" }}
                >
                  <Own data={data} width={700} height={420} edit={false} />
                </Col>
                <Col
                  className="d-none d-sm-block d-md-none"
                  style={{ backgroundColor: "#e0e0e0" }}
                >
                  <Own data={data} width={500} height={300} edit={false} />
                </Col>
                <Col className="d-xs-block d-sm-none">
                  Graphics can not be displayed. Device too small
                </Col>
              </Row>
            )}
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  const props = {
    error: state.error,
    data: state.graphview
  };
  return props;
}

export default connect(mapStateToProps)(GraphView);

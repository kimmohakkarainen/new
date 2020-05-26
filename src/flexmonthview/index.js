import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import { fetchFlexPersons } from "../actions";

function FlexMonthView() {
  return (
    <Card>
      <Card.Header>
        <strong>Header</strong>
      </Card.Header>
      <Card.Body>
        <strong>this is body</strong>
      </Card.Body>
      <Card.Footer>
        <Button>OK</Button>
      </Card.Footer>
    </Card>
  );
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    getFlexPersons: () => dispatch(fetchFlexPersons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlexMonthView);

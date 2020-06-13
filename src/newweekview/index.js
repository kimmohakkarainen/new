import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import getColumnsProp from "./columnsprop";
import { fetchWeek, postWeek } from "../actions";
import { isValidHourString } from "../components";

function NewWeekView({ fetchWeek, postWeek, title, rows, header }) {
  useEffect(() => {
    fetchWeek();
  }, []);

  const cellEditProp = cellEditFactory({
    mode: "click",
    blurToSave: true,
    nonEditableRows: function() {
      return [0];
    },
    afterSaveCell: onAfterSaveCell // a hook for after saving cell
  });

  function rowStyle(row, rowIndex) {
    if (row.projectId === 0) {
      return { backgroundColor: "#bcc5cd" };
    } else {
      return {};
    }
  }

  function onAfterSaveCell(oldValue, newValue, row, column) {
    if (isValidHourString(newValue)) {
      const newstate = {
        value: newValue,
        projectId: row.projectId,
        day: dayToIndex(row.baseDate, column.dataField)
      };
      row[column.dataField] = "---";
      postWeek(newstate);
    } else {
      row[column.dataField] = oldValue;
    }
  }

  const columns = getColumnsProp(header);

  return (
    <div>
      <Container fluid style={{ padding: "15px" }}>
        <Row>
          <Col sm={3} className="d-none d-sm-block">
            <Button variant="outline-primary" onClick={() => {}}>
              &larr; Previous
            </Button>
          </Col>
          <Col xs={3} className="d-block d-sm-none">
            <Button variant="outline-primary" onClick={() => {}}>
              &larr;
            </Button>
          </Col>

          <Col xs={6} style={{ textAlign: "center" }}>
            {title}
          </Col>
          <Col
            xs={3}
            className="d-block d-sm-none"
            style={{ textAlign: "right" }}
          >
            <Button variant="outline-primary" onClick={() => {}}>
              &rarr;
            </Button>
          </Col>
          <Col
            sm={3}
            className="d-none d-sm-block"
            style={{ textAlign: "right" }}
          >
            <Button variant="outline-primary" onClick={() => {}}>
              Next &rarr;
            </Button>
          </Col>
        </Row>
      </Container>
      <BootstrapTable
        bordered
        striped
        keyField="projectId"
        data={rows}
        columns={columns}
        cellEdit={cellEditProp}
      />
    </div>
  );
}

function mapStateToPropsStatic(state) {
  const props = {
    today: "1.1.2019",
    header: [
      { date: "1.1.2019", workday: false },
      { date: "2.1.2019", workday: true },
      { date: "3.1.2019", workday: true },
      { date: "4.1.2019", workday: true },
      { date: "5.1.2019", workday: true },
      { date: "6.1.2019", workday: false },
      { date: "7.1.2019", workday: false }
    ],
    projects: [
      {
        projectId: 1,
        customerName: "Customer",
        projectName: "Project",
        mon: "0:00",
        tue: "1:00",
        wed: "2:30",
        thu: "3:30",
        fri: "4:30",
        sat: "0:00",
        sun: "0:00",
        week: "1:00"
      },
      {
        projectId: 2,
        time: "6:30",
        project: "Harjoitus",
        customer: "Customer",
        week: "12:00",
        month: "75:00"
      }
    ]
  };
  return props;
}
function mapStateToProps({ weekview }) {
  const header = [
    { date: "1.1.2019", workday: false },
    { date: "2.1.2019", workday: true },
    { date: "3.1.2019", workday: true },
    { date: "4.1.2019", workday: true },
    { date: "5.1.2019", workday: true },
    { date: "6.1.2019", workday: false },
    { date: "7.1.2019", workday: false }
  ];

  var { title, rows, previousWeek, nextWeek } = weekview;

  rows = rows == null ? [] : rows;

  return { title, rows, previousWeek, nextWeek, header };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeek: params => dispatch(fetchWeek(params)),
    postWeek: params => dispatch(postWeek(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWeekView);

function dayToIndex(basedate, value) {
  switch (value) {
    case "mon":
      return basedate;
    case "tue":
      return basedate + 1;
    case "wed":
      return basedate + 2;
    case "thu":
      return basedate + 3;
    case "fri":
      return basedate + 4;
    case "sat":
      return basedate + 5;
    case "sun":
      return basedate + 6;
    default:
      return basedate;
  }
}

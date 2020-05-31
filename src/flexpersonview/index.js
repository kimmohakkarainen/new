import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import { fetchFlexPersons, fetchPersonFlexSummary } from "../actions";
import FlexSumModal from "./flexsummodal";

function FlexPersonView({
  getFlexPersons,
  fetchPersonFlexSummary,
  persons,
  header,
  months
}) {
  const [selected, setSelected] = useState(null);

  const columnsProp = [
    {
      dataField: "personId",
      text: "ID",
      hidden: true,
      editable: false
    },
    {
      dataField: "fullname",
      text: "Name",
      headerStyle: { width: "30%" },
      editable: false
    },
    {
      dataField: "flex1",
      text: "----",
      headerStyle: { width: "15%" },
      editable: false,
      text: header[0]
    },
    {
      dataField: "flex2",
      text: "---",
      headerStyle: { width: "15%" },
      editable: false,
      text: header[1]
    },
    {
      dataField: "flex3",
      text: "--",
      headerStyle: { width: "15%" },
      editable: false,
      text: header[2]
    },
    {
      dataField: "flex4",
      text: "-",
      headerStyle: { width: "15%" },
      editable: false,
      text: header[3],
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          fetchPersonFlexSummary(row.personId);
          setSelected(row);
        }
      }
    }
  ];

  useEffect(() => {
    getFlexPersons();
  }, []);

  return (
    <div>
      {selected != null && (
        <FlexSumModal
          user={selected}
          months={months}
          handleClose={() => setSelected(null)}
        />
      )}
      <BootstrapTable
        bordered
        striped
        bootstrap4
        keyField="personId"
        data={persons}
        columns={columnsProp}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const header =
    state.flexpersons == null ? ["", "", "", ""] : state.flexpersons.header;
  const persons = state.flexpersons == null ? [] : state.flexpersons.persons;
  const flex = state.personFlexSummary;

  console.log("mapStateToProps");
  console.log(header);
  console.log(persons);
  return {
    persons: persons,
    header: header,
    months: flex != null && flex.months != null ? flex.months : []
  };
}

const mapDispatchToProps = dispatch => {
  console.log(fetchFlexPersons);
  return {
    getFlexPersons: () => dispatch(fetchFlexPersons()),
    fetchPersonFlexSummary: personId =>
      dispatch(fetchPersonFlexSummary(personId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlexPersonView);

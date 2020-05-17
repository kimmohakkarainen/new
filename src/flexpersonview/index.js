import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import { fetchFlexPersons } from "../actions";

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
    editable: false
  },
  {
    dataField: "flex2",
    text: "---",
    headerStyle: { width: "15%" },
    editable: false
  },
  {
    dataField: "flex3",
    text: "--",
    headerStyle: { width: "15%" },
    editable: false
  },
  {
    dataField: "flex4",
    text: "-",
    headerStyle: { width: "15%" },
    editable: false
  }
];

function FlexPersonView({ getFlexPersons, persons, header }) {
  columnsProp[2].text = header[0];
  columnsProp[3].text = header[1];
  columnsProp[4].text = header[2];
  columnsProp[5].text = header[3];

  console.log(getFlexPersons);

  useEffect(() => {
    getFlexPersons();
  }, []);

  return (
    <BootstrapTable
      bordered
      striped
      bootstrap4
      keyField="personId"
      data={persons}
      columns={columnsProp}
    />
  );
}

function mapStateToPropsStatic(state) {
  const data = {
    persons: [
      {
        personId: 2,
        fullname: "kimmo",
        minus4: "0:00",
        minus3: "+0:00",
        minus2: "+4:30",
        minus1: "+8:30"
      },
      {
        personId: 76,
        fullname: "asdlfkj",
        minus4: "0:00",
        minus3: "+0:00",
        minus2: "+7:30",
        minus1: "+8:30"
      },
      {
        personId: 23476,
        fullname: "qweoriu",
        minus4: "",
        minus3: "",
        minus2: "----",
        minus1: "----"
      }
    ]
  };
  return data;
}

function mapStateToProps(state) {
  const header =
    state.flexpersons == null ? ["", "", "", ""] : state.flexpersons.header;
  const persons = state.flexpersons == null ? [] : state.flexpersons.persons;

  console.log("mapStateToProps");
  console.log(header);
  console.log(persons);
  return {
    persons: persons,
    header: header
  };
}

const mapDispatchToProps = dispatch => {
  console.log(fetchFlexPersons);
  return {
    getFlexPersons: () => dispatch(fetchFlexPersons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlexPersonView);

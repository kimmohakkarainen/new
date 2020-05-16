import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

import UserDetailModal from "./userdetailmodal";
import FlexDetailModal from "./flexdetailmodal";
import ProjectPrefModal from "./projectprefmodal";
import PrivilegeModal from "./privilegemodal";
import PasswordModal from "./passwordmodal";

import {
  fetchPersons,
  postProjectPreferences,
  fetchProjectPreferencesSucceeded
} from "../actions";

const cellOptions = {
  0: "Deleted",
  1: "Closed",
  2: "Contractor",
  3: "Team member",
  4: "Project manager",
  5: "Administrator"
};

function flexFormatter({ person }) {
  const date = person.flexdate;
  if (date != null && date.length > 0) {
  } else {
    return "";
  }
}

class PersonAdminView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editUserDetails: null,
      editFlexDetails: null,
      editProjectPrefs: null,
      editPrivileges: null,
      changePassword: null
    };

    this.onProjectPrefChange = this.onProjectPrefChange.bind(this);

    this.columnsProp = [
      {
        dataField: "personId",
        text: "Person Id",
        headerStyle: { width: "10%" },
        hidden: false
      },
      {
        dataField: "info",
        text: "Personal details",
        headerStyle: { width: "20%" },
        editable: false,
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            this.setState({ editUserDetails: row });
          }
        }
      },
      {
        dataField: "flex",
        text: "Flex hours",
        headerStyle: { width: "20%" },
        editable: false,
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            this.setState({ editFlexDetails: row });
          }
        }
      },
      {
        dataField: "projects",
        text: "Projects",
        headerStyle: { width: "20%" },
        editable: false,
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            this.props.dispatch(
              postProjectPreferences({ personId: row.personId })
            );
            this.setState({ editProjectPrefs: row });
          }
        }
      },
      {
        dataField: "rights",
        text: "User rights",
        headerStyle: { width: "20%" },
        editable: false,
        formatter: cell => cellOptions[cell],
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            this.setState({ editPrivileges: row });
          }
        }
      },
      {
        dataField: "password",
        text: "",
        headerStyle: { width: "10%" },
        editable: false,
        events: {
          onClick: (e, column, columnIndex, row, rowIndex) => {
            this.setState({ changePassword: row });
          }
        },

        formatter: (cellContent, row) => <Button>Change Password</Button>
      }
    ];
  }

  componentDidMount() {
    this.props.dispatch(fetchPersons());
  }

  onProjectPrefChange(project) {
    console.log(this.state.editProjectPrefs);
    console.log(project);
    if (project != null) {
      const params = {
        personId: this.state.editProjectPrefs.personId,
        projectId: project.projectId,
        selected: !project.selected
      };
      this.props.dispatch(postProjectPreferences(params));
    } else {
      this.setState({ editProjectPrefs: null });
      this.props.dispatch(fetchProjectPreferencesSucceeded([]));
      this.props.dispatch(fetchPersons());
    }
  }

  render() {
    const persons = this.props.personadmin;
    console.log(persons);

    return (
      <div>
        {this.state.editUserDetails && (
          <UserDetailModal
            user={this.state.editUserDetails}
            onSave={user => {
              if (user != null) {
                console.log("save pressed");
                console.log(user);
              }
            }}
          />
        )}
        {this.state.editFlexDetails && (
          <FlexDetailModal
            user={this.state.editFlexDetails}
            onSave={user => {
              if (user != null) {
                console.log("save pressed");
                console.log(user);
              }
            }}
          />
        )}
        {this.state.editProjectPrefs && (
          <ProjectPrefModal
            user={this.state.editProjectPrefs}
            customers={this.props.projectprefview}
            onSave={this.onProjectPrefChange}
          />
        )}
        {this.state.editPrivileges && (
          <PrivilegeModal
            user={this.state.editPrivileges}
            onSave={user => {
              if (user != null) {
                console.log("save pressed");
                console.log(user);
              }
            }}
          />
        )}

        {this.state.changePassword && (
          <PasswordModal
            user={this.state.changePassword}
            onSave={user => {
              if (user != null) {
                console.log("save pressed");
                console.log(user);
              }
            }}
          />
        )}

        <BootstrapTable
          bordered
          striped
          bootstrap4
          keyField="personId"
          data={persons}
          columns={this.columnsProp}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const customers =
    state.projectprefview.customers == null
      ? []
      : state.projectprefview.customers;
  const props =
    state == null
      ? { personadmin: [], projectprefview: [] }
      : Object.assign(
          {},
          { error: state.error },
          { personadmin: state.personadmin },
          { projectprefview: customers }
        );
  return props;
}

export default connect(mapStateToProps)(PersonAdminView);

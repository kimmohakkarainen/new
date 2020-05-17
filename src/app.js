import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Alert } from "react-bootstrap";

import Menu from "./menu";

import LogoutView from "./logoutview";
import DayView from "./dayview";
import WeekView from "./weekview";
import MonthView from "./monthview";
import CustomerView from "./customerview";
import ProjectView from "./projectview";
import ReportView from "./reportview";
import GraphView from "./graphview";
import ProjectPreferences from "./projectpref";
import PasswordView from "./passwordview";
import PrefView from "./prefview";
import FlexProjectView from "./flexprojectview";
import FlexPersonView from "./flexpersonview";
import PersonAdminView from "./personadminview";

import { fetchWhoAmI } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchWhoAmI());
  }

  render() {
    const { name, privileged } =
      this.props.person != null
        ? this.props.person
        : { name: "", privileged: false };
    return (
      <div className="App">
        <Router>
          <div>
            <Menu privileged={privileged} name={name} />

            {this.props.error && (
              <Alert variant="danger">
                <strong>{this.props.error}</strong>
              </Alert>
            )}

            <Route exact path="/" component={DayView} />
            <Route path="/day" component={DayView} />
            <Route path="/week" component={WeekView} />
            <Route path="/month" component={MonthView} />
            <Route path="/admin/customers" component={CustomerView} />
            <Route path="/admin/customer/:id" component={ProjectView} />
            <Route path="/admin/persons" component={PersonAdminView} />
            <Route path="/admin/reports" component={ReportView} />
            <Route path="/admin/graphs" component={GraphView} />
            <Route path="/admin/flexprojects" component={FlexProjectView} />
            <Route path="/admin/flexpersons" component={FlexPersonView} />
            <Route exact path="/logout" component={LogoutView} />
            <Route exact path="/password" component={PasswordView} />
            <Route exact path="/pref" component={PrefView} />
            <Route exact path="/pref/projects" component={ProjectPreferences} />
          </div>
        </Router>
        <div className="footer-filler" />
        <div className="footer text-black-50">&copy; 2017-2020 ɘksɐdɘsɪ</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    person: state.whoami,
    error: state.error
  };
}

export default connect(mapStateToProps)(App);

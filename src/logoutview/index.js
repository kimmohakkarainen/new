import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Spinner
} from "react-bootstrap";

import { postLogout } from "../actions";

class LogoutView extends Component {
	  constructor(props) {
	    super(props);

	  }
	  
	  componentDidMount() {
		  this.props.dispatch(postLogout());
	  }
	    
	  render() {
		  return <Spinner animation="grow" />;
	  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LogoutView);

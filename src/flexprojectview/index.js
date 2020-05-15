import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type }  from "react-bootstrap-table2-editor";

import { fetchFlexProjects, saveFlexProject } from "../actions";

import { columnsProp } from "./columnsprop";


class FlexProjectView extends Component {
	constructor(props) {
		super(props);

		this.onAfterSaveCell = this.onAfterSaveCell.bind(this);

		this.cellEditProp = cellEditFactory({
			mode: "click",
			blurToSave: true,
			nonEditableRows: function() {
				return [0];
			},
			afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
		});
		this.state = {
				addCustomer: false
		};
	}

	componentDidMount() {
		this.props.dispatch(fetchFlexProjects());
	}

	onAfterSaveCell(oldValue, newValue, row, column) {
		const newstate = {
				classification: { value:newValue },
				projectId: row.projectId
		};
		row[column.dataField] = "---";
		this.props.dispatch(saveFlexProject(newstate));
	}

	render() {
	    const tobealerted = this.props.projects.unclassified.length > 0;
		const projs = tobealerted ? this.props.projects.unclassified : this.props.projects.all;
		const projects = projs.map(p => {
			return ({
				projectId: p.projectId,
				customer: p.customer,
				name: p.name,
				classification: p.classification.value});
		});
		return (
				<div>
				{ tobealerted && <Alert variant="warning"><strong>WARNING</strong> The following projects are missing classification</Alert> } 
				<BootstrapTable
				bordered
				striped
				bootstrap4
				keyField="projectId"
					data={projects}
				columns={columnsProp}
				cellEdit={this.cellEditProp}
				/>
				</div>
		);
	}
}

function mapStateToProps(state) {
	const props =
		state == null
		? { projects: { unclassified: [], all: [], classificationOptions: [] } }
	: Object.assign(
			{},
			{ error: state.error },
			{ projects: state.flexprojects }
	);
		return props;
}

export default connect(mapStateToProps)(FlexProjectView);

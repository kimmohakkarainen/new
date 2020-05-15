import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type }  from "react-bootstrap-table2-editor";

import { fetchPersons, postPerson } from "../actions";

/* import { columnsProp } from "./columnsprop"; */


const cellOptions = { false: 'Non-privileged',true : 'Privileged' };

export const columnsProp = [
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
        	onClick: (e, column, columnIndex,row, rowIndex) => {
        		console.log(e);
        		console.log(column);
        		console.log(columnIndex);
        		console.log(row);
        		console.log(rowIndex);
        	}
        }
    },
    {
        dataField: "flex",
        text: "Flex hours",
        headerStyle: { width: "20%" },
        editable: false
    },
    {
        dataField: "projects",
        text: "Projects",
        headerStyle: { width: "20%" },
        editable: false
    },
    {
        dataField: "rights",
        text: "Privileged",
        headerStyle: { width: "20%" },
        editable: false,
    },
    {
    	dataField: "password",
    	text: "Password",
        headerStyle: { width: "10%" },
        editable: false,
    	formatter: (cellContent, row) => (
    		<Button>Change Password</Button>
    	)
    }
];



class PersonAdminView extends Component {
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
		this.props.dispatch(fetchPersons());
	}

	onAfterSaveCell(oldValue, newValue, row, column) {
		const newstate = {
				classification: { value:newValue },
				projectId: row.projectId
		};
		row[column.dataField] = "---";
		this.props.dispatch(postPerson(newstate));
	}

	render() {
	    const persons = this.props.personadmin;
		return (
				<div>
				<BootstrapTable
				bordered
				striped
				bootstrap4
				keyField="personId"
					data={persons}
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
			{ personadmin: state.personadmin }
	);
		return props;
}

export default connect(mapStateToProps)(PersonAdminView);

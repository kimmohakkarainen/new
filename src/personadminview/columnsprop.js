import React from "react";
import { Type }  from "react-bootstrap-table2-editor";
import { Alert, Container, Row, Col, Button } from "react-bootstrap";

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

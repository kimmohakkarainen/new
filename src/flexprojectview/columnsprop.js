import React from "react";
import { Type }  from "react-bootstrap-table2-editor";

const cellOptions = { 0: 'NORMAL',1: 'IGNORED',2: 'OVERTIME',3: 'FILL',4: 'FIXED' };

export const columnsProp = [
    {
        dataField: "projectId",
        text: "projectId",
        headerStyle: { width: "10%" },
        hidden: false
    },
    {
        dataField: "customer",
        text: "Customer",
        headerStyle: { width: "30%" },
        editable: false
    },
    {
        dataField: "name",
        text: "Project",
        headerStyle: { width: "30%" },
        editable: false
    },
    {
        dataField: "classification",
        text: "Classification",
        headerStyle: { width: "30%" },
        editable: true,
        formatter: cell => cellOptions[cell],
        editor: {
            type: Type.SELECT,
            options: [
                { value: 0, label:'NORMAL'},
                { value: 1, label:'IGNORED'},
                { value: 2, label:'OVERTIME'},
                { value: 3, label:'FILL'},
                { value: 4, label:'FIXED'}
                ]
        }
    }
    ];

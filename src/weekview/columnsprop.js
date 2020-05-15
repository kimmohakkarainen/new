export const columnsProp = [
  { dataField: "projectId", text: "projectId", hidden: true },
  {
    dataField: "customerName",
    text: "Customer",
    editable: false,
    headerStyle: { width: "15%" },
    headerClasses: "weekview-customer-column d-none d-lg-table-cell",
    classes: "weekview-customer-column d-none d-lg-table-cell"
  },
  {
    dataField: "projectName",
    text: "Project",
    editable: false,
    headerStyle: { width: "15%" },
    headerClasses: "weekview-project-column",
    classes: "weekview-project-column"
  },
  {
    dataField: "mon",
    text: "Mon",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "tue",
    text: "Tue",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "wed",
    text: "Wed",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "thu",
    text: "Thu",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "fri",
    text: "Fri",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "sat",
    text: "Sat",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-saturday-header d-none d-lg-table-cell",
    classes: "weekview-saturday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  },
  {
    dataField: "sun",
    text: "Sun",
    editable: true,
    headerStyle: { width: "10%" },
    headerClasses: "weekview-sunday-header d-none d-lg-table-cell",
    classes: "weekview-sunday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  }
];

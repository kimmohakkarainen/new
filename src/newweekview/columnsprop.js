export const columnsProp = [
  { dataField: "projectId", text: "projectId", hidden: true },
  {
    dataField: "customerName",
    text: "Customer",
    editable: false,
    headerStyle: { width: "22%" },
    headerClasses: "weekview-customer-column d-none d-lg-table-cell",
    classes: "weekview-customer-column d-none d-lg-table-cell"
  },
  {
    dataField: "projectName",
    text: "Project",
    editable: false,
    headerStyle: { width: "22%" },
    headerClasses: "weekview-project-column",
    classes: "weekview-project-column"
  },
  {
    dataField: "mon",
    text: "Mon",
    editable: true,
    style: {},
    headerStyle: { width: "7%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "tue",
    text: "Tue",
    editable: true,
    style: {},
    headerStyle: { width: "7%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "wed",
    text: "Wed",
    editable: true,
    style: {},
    headerStyle: { width: "7%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "thu",
    text: "Thu",
    editable: true,
    style: {},
    headerStyle: { width: "7%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "fri",
    text: "Fri",
    editable: true,
    style: {},
    headerStyle: { width: "7%" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "sat",
    text: "Sat",
    editable: true,
    style: { backgroundColor: "var(--gray)" },
    headerStyle: { width: "7%", backgroundColor: "var(--gray)" },
    headerClasses: "weekview-saturday-header d-none d-lg-table-cell",
    classes: "weekview-saturday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  },
  {
    dataField: "sun",
    text: "Sun",
    editable: true,
    style: { backgroundColor: "var(--gray)" },
    headerStyle: { width: "7%", backgroundColor: "var(--gray)" },
    headerClasses: "weekview-sunday-header d-none d-lg-table-cell",
    classes: "weekview-sunday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  },
  {
    dataField: "total",
    text: "Week",
    editable: false,
    headerStyle: { width: "7%", backgroundColor: "var(--light)" },
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column"
  }
];

export default function getColumnsProp(header) {
  const props = Object.assign([], columnsProp);

  var style = { backgroundColor: header[0].workday ? "" : "var(--gray" };
  props[3] = Object.assign({}, columnsProp[3], {
    style: style,
    headerStyle: style
  });
  /*
  props[4] = Object.assign({}, columnsProp[4], {
    style: header[1].workday ? "" : "var(--gray",
    headerStyle: header[1].workday ? "" : "var(--gray"
  });
  props[5] = Object.assign({}, columnsProp[5], {
    style: header[2].workday ? "" : "var(--gray",
    headerStyle: header[2].workday ? "" : "var(--gray"
  });
  props[6] = Object.assign({}, columnsProp[6], {
    style: header[3].workday ? "" : "var(--gray",
    headerStyle: header[3].workday ? "" : "var(--gray"
  });
  props[7] = Object.assign({}, columnsProp[7], {
    style: header[4].workday ? "" : "var(--gray",
    headerStyle: header[4].workday ? "" : "var(--gray"
  });
*/
  return props;
}

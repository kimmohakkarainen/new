export const columnsProp = [
  { dataField: "projectId", text: "projectId", hidden: true },
  {
    dataField: "customerName",
    text: "Customer",
    editable: false,
    headerStyle: { width: "22%" },
    headerClasses: "weekview-customer-column d-none d-xl-table-cell",
    classes: "weekview-customer-column d-none d-xl-table-cell"
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
    editable: true,
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "tue",
    editable: true,
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "wed",
    editable: true,
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "thu",
    editable: true,
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column",
    editCellClasses: ""
  },
  {
    dataField: "fri",
    editable: true,
    headerClasses: "weekview-day-header",
    classes: "weekview-day-column"
  },
  {
    dataField: "sat",
    editable: true,
    style: { backgroundColor: "#bcc5cd" },
    headerStyle: { width: "7%", backgroundColor: "var(--gray)" },
    headerClasses: "weekview-saturday-header d-none d-lg-table-cell",
    classes: "weekview-saturday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  },
  {
    dataField: "sun",
    text: "Sun",
    editable: true,
    style: { backgroundColor: "#bcc5cd" },
    headerStyle: { width: "7%", backgroundColor: "var(--gray)" },
    headerClasses: "weekview-sunday-header d-none d-lg-table-cell",
    classes: "weekview-sunday-column d-none d-lg-table-cell",
    editCellClasses: "d-none d-lg-table-cell"
  },
  {
    dataField: "total",
    text: "Week",
    editable: false,
    style: { backgroundColor: "var(--light)" },
    headerStyle: { width: "7%", backgroundColor: "var(--light)" },
    headerClasses: "weekview-day-header d-none d-md-table-cell",
    classes: "weekview-day-column d-none d-md-table-cell"
  }
];

function headerStyleGenerator(header) {
  return (column, colIndex) => {
    if (header == null || header[colIndex - 2].workday) {
      return { width: "7%" };
    } else {
      return {
        width: "7%",
        backgroundColor: "var(--gray)"
      };
    }
  };
}

function styleGenerator(header) {
  return (cell, row, rowIndex, colIndex) => {
    if (header == null || row.projectId === 0 || header[colIndex - 2].workday) {
      return {};
    } else {
      return {
        backgroundColor: "#ececec"
      };
    }
  };
}

function headerText(header) {
  console.log(header);
  if (header == null || header.length < 7) {
    return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  } else {
    return [
      header[0].dayOfMonth + ". Mo",
      header[1].dayOfMonth + ". Tu",
      header[2].dayOfMonth + ". We",
      header[3].dayOfMonth + ". Th",
      header[4].dayOfMonth + ". Fr",
      header[5].dayOfMonth + ". Sa",
      header[6].dayOfMonth + ". Su"
    ];
  }
}

export default function getColumnsProp(header) {
  const props = Object.assign([], columnsProp);

  const hStyle = headerStyleGenerator(header);
  const cStyle = styleGenerator(header);

  const texts = headerText(header);

  props[3].text = texts[0];
  props[4].text = texts[1];
  props[5].text = texts[2];
  props[6].text = texts[3];
  props[7].text = texts[4];
  props[8].text = texts[5];
  props[9].text = texts[6];
  props[3].headerStyle = hStyle;
  props[4].headerStyle = hStyle;
  props[5].headerStyle = hStyle;
  props[6].headerStyle = hStyle;
  props[7].headerStyle = hStyle;
  props[3].style = cStyle;
  props[4].style = cStyle;
  props[5].style = cStyle;
  props[6].style = cStyle;
  props[7].style = cStyle;
  props[8].style = cStyle;
  props[9].style = cStyle;

  return props;
}

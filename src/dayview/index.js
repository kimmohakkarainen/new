import React, { Component } from "react";
import { connect } from "react-redux";

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

import { fetchDay, postDay } from "../actions";
import { isValidHourString } from "../components";
import { columnsProp } from "./columnsprop";

class DayView extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    this.onAfterSaveTimeCell = this.onAfterSaveTimeCell.bind(this);
    this.onAfterSaveCommentCell = this.onAfterSaveCommentCell.bind(this);

    this.cellEditProp = cellEditFactory({
      mode: "click",
      blurToSave: true,
      nonEditableRows: function() {
        return [0];
      },
      afterSaveCell: this.onAfterSaveCell // a hook for after saving cell
    });
  }

  componentDidMount() {
    this.props.dispatch(fetchDay());
  }

  handlePrevious() {
    this.props.dispatch(fetchDay(this.props.previous));
  }

  handleNext() {
    this.props.dispatch(fetchDay(this.props.next));
  }

  onAfterSaveCell(oldValue, newValue, row, column) {
	  if(column.dataField == 'time') {
		  this.onAfterSaveTimeCell(oldValue, newValue, row, column);
	  } else { 
		  this.onAfterSaveCommentCell(oldValue, newValue, row, column);
	  }
  }

  onAfterSaveCommentCell(oldValue, newValue, row, column) {
      const newstate = {
    	        value: row.time,
    	        projectId: row.projectId,
    	        date: this.props.today,
    	        comment: newValue
    	      };
      row.comment = "---";
      this.props.dispatch(postDay(newstate));
  }

  
  onAfterSaveTimeCell(oldValue, newValue, row, column) {
    if (isValidHourString(newValue)) {
      const newstate = {
        value: newValue,
        projectId: row.projectId,
        date: this.props.today,
        comment: row.comment,
      };
      row[column.dataField] = "---";
      this.props.dispatch(postDay(newstate));
    } else {
      row[column.dataField] = oldValue;
    }
  }

  render() {
    const projects = this.props.projects == null ? [] : this.props.projects;
    return (
      <div>
        <Container style={{ padding: "15px" }}>
          <Row>
            <Col style={{ textAlign: "left" }} className="d-none d-sm-block">
              <Button variant="outline-primary" onClick={this.handlePrevious}>
                &larr; Previous
              </Button>
            </Col>
            <Col style={{ textAlign: "left" }} className="d-block d-sm-none">
            <Button variant="outline-primary" onClick={this.handlePrevious}>
              &larr;
            </Button>
          </Col>

            <Col style={{ textAlign: "center" }}>
              {this.props.title}
            </Col>
            <Col style={{ textAlign: "right" }} className="d-none d-sm-block">
              <Button variant="outline-primary" onClick={this.handleNext}>
                Next &rarr;
              </Button>
            </Col>
            <Col style={{ textAlign: "right" }} className="d-block d-sm-none">
            <Button variant="outline-primary" onClick={this.handleNext}>
              &rarr;
            </Button>
          </Col>

          </Row>
        </Container>

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

function mapStateToPropsOffline(state) {
  const props = {
    today: "1.1.2019",
    projects: [
      {
        projectId: 1,
        time: "1:00",
        project: "Project",
        customer: "Customer",
        week: "1:00",
        month: "1:00"
      },
      {
        projectId: 2,
        time: "6:30",
        project: "Harjoitus",
        customer: "Customer",
        week: "12:00",
        month: "75:00"
      },
      {
        projectId: 0,
        time: "1:00",
        week: "12:00",
        month: "75:00"
      }
    ]
  };
  return props;
}

function mapStateToProps(state) {
  const props =
    state == null
      ? {}
      : Object.assign({}, { error: state.error }, state.dayview);
  return props;
}

export default connect(mapStateToProps)(DayView);
